import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

import { IVideo } from './video.type'
import { UserService } from 'modules/users/services/user.service'
import { NotificationService } from 'modules/notifications/notification.service'

@WebSocketGateway({ cors: { methods: ['GET', 'POST'], credentials: true } })
export class VideoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server

  constructor(
    private readonly userService: UserService,
    private readonly notiService: NotificationService,
  ) {}

  private userSocketMap: Map<string, string> = new Map()

  handleConnection(client: Socket) {
    console.log('Connection success by', client.id)
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id)
    // Remove the disconnected socket from our map
    for (const [userId, socketId] of this.userSocketMap.entries()) {
      if (socketId === client.id) {
        this.userSocketMap.delete(userId)
        break
      }
    }
  }

  @SubscribeMessage('register')
  handleRegister(client: Socket, userId: string) {
    this.userSocketMap.set(userId, client.id)
    console.log(`User ${userId} registered with socket ${client.id}`)
  }

  async notifyNewVideo(video: IVideo) {
    const { title, referrerId } = video
    const users = await this.userService.getUsers()
    const user = await this.userService.getUserById(referrerId)
    const message = `${user.name} shared a new video: ${title}`

    for (const recipient of users) {
      if (recipient._id.toString() !== user._id.toString()) {
        const notification = await this.notiService.create({
          message,
          recipient: recipient._id.toString(),
          sender: user._id.toString(),
          videoId: video._id.toString(),
        })

        // Get the recipient's socket ID
        const recipientSocketId = this.userSocketMap.get(
          recipient._id.toString(),
        )
        if (recipientSocketId) {
          // Emit the new notification event to the recipient
          this.wss.to(recipientSocketId).emit('newNotification', notification)
        }
      }
    }
  }
}
