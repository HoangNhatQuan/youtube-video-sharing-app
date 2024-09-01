import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'

import { IVideoSharing } from '../video-sharing.type'
import { User } from 'modules/users/entities/users.entity'

export type VideoSharingDocument = HydratedDocument<VideoSharing>

@Schema({ autoIndex: true, timestamps: true })
export class VideoSharing implements IVideoSharing {
  _id?: Types.ObjectId

  @Prop({ type: String, required: true })
  url: string

  @Prop({ type: String, required: true, ref: User.name })
  userId: string

  createdAt?: any
  updatedAt?: any
}

export const VideoSharingSchema = SchemaFactory.createForClass(VideoSharing)
