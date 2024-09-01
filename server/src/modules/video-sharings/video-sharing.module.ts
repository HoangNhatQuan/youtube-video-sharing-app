import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import {
  VideoSharing,
  VideoSharingSchema,
} from './entities/video-sharing.entity'
import { VideoSharingController } from './video-sharing.controller'
import { VideoSharingService } from './video-sharing.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VideoSharing.name, schema: VideoSharingSchema },
    ]),
  ],
  controllers: [VideoSharingController],
  providers: [VideoSharingService],
})
export class VideoSharingModule {}
