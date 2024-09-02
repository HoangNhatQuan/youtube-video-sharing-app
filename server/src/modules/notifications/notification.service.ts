import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Notification } from './entities/Notification.entity'
import { MIN_OFFSET } from 'pipelines/offset.pipe'
import { MAX_LIMIT } from 'pipelines/limit.pipe'
import { Video } from 'modules/videos/entities/video.entity'
import { User } from 'modules/users/entities/users.entity'
import { CreateNotificationDto } from './dto/create-noti.dto'

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private readonly notiModel: Model<Notification>,
  ) {}

  async getNotifications({
    offset = MIN_OFFSET,
    limit = MAX_LIMIT,
  }: {
    offset?: number
    limit?: number
  }) {
    return await this.notiModel.find(
      {},
      {
        sort: { createdAt: -1 },
        skip: offset,
        limit,
      },
      {
        populate: [
          { path: 'videoId', model: Video.name },
          { path: 'sender', model: User.name },
          { path: 'recipient', model: User.name },
        ],
      },
    )
  }

  async markRead(id: string) {
    return await this.notiModel.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true },
    )
  }

  async create(createNotificationDto: CreateNotificationDto) {
    return await this.notiModel.create(createNotificationDto)
  }
}
