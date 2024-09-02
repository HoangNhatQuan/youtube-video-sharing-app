import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Video, VideoSchema } from './entities/video.entity'
import { VideoController } from './video.controller'
import { VideoService } from './video.service'
import { YoutubeApiService } from 'providers/youtube-api/youtube-api.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  ],
  controllers: [VideoController, YoutubeApiService],
  providers: [VideoService],
})
export class VideoModule {}
