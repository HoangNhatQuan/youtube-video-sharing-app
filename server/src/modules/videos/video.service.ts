import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Video } from './entities/video.entity'
import { ShareVideoDto } from './dto/share-video.dto'
import { YoutubeApiService } from 'providers/youtube-api/youtube-api.service'

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name)
    private readonly videoModel: Model<Video>,
    private readonly youtubeService: YoutubeApiService,
  ) {}
  private async isVideoIdUnique(videoYtbId: string): Promise<boolean> {
    const video = await this.videoModel.findOne({ videoYtbId })
    return !video
  }

  async getVideos() {
    // return await this.videoModel.find(query)
  }

  async shareVideo(userId: string, shareVideoDto: ShareVideoDto) {
    const { url, referrerId } = shareVideoDto

    if (referrerId !== userId) {
      throw new ForbiddenException('Unauthorized')
    }

    if (!this.youtubeService.isValidYouTubeUrl(url)) {
      throw new BadRequestException('Invalid YouTube URL')
    }

    const videoId = this.youtubeService.extractVideoId(url)
    if (!videoId) {
      throw new BadRequestException('Unable to extract video ID from URL')
    }
    const isVideoIdUnique = await this.isVideoIdUnique(videoId)
    if (!isVideoIdUnique) {
      throw new BadRequestException('Video already exists')
    }

    const metadata = await this.youtubeService.getYouTubeMetadata(videoId)
    if (!metadata) {
      throw new BadRequestException('Unable to fetch video metadata')
    }

    const newVideo = await this.videoModel.create({
      referrerId: userId,
      videoId,
      url,
      ...metadata,
    })
    return newVideo
  }
}
