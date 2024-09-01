import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { VideoSharing } from './entities/video-sharing.entity'

@Injectable()
export class VideoSharingService {
  constructor(
    @InjectModel(VideoSharing.name)
    private videoSharingModel: Model<VideoSharing>,
  ) {}
}
