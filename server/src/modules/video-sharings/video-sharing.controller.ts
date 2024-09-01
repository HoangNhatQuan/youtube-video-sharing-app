import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { VideoSharing } from './entities/video-sharing.entity'
import { AuthGuard } from 'guards/auth.guard'
import { CreateVideoSharingDto } from './dto/create-video-sharing.dto'

@UseGuards(AuthGuard)
@Controller('video-sharing')
export class VideoSharingController {
  constructor(
    @InjectModel(VideoSharing.name)
    private videoSharingModel: Model<VideoSharing>,
  ) {}

  @Get()
  async findAll(@Req() req) {
    return await this.videoSharingModel.find({ userId: req.userId })
  }

  @Post()
  async create(@Body() createVideoSharingDto: CreateVideoSharingDto) {
    return await this.videoSharingModel.create(createVideoSharingDto)
  }
}
