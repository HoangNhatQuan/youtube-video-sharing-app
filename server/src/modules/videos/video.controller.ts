import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common'

import { AuthGuard } from 'guards/auth.guard'
import { ShareVideoDto } from './dto/share-video.dto'
import { VideoService } from './video.service'

@UseGuards(AuthGuard)
@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async findAll(@Req() req) {
    return await this.videoService.getVideos()
  }

  @Post('share')
  async shareVideo(@Req() req, @Body() shareVideoDto: ShareVideoDto) {
    return await this.videoService.shareVideo(req.userId, shareVideoDto)
  }
}
