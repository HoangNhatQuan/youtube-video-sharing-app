import { IUser } from '../auth/auth.type'

export type IVideo = {
  _id: string
  videoId: string
  title: string
  description?: string
  thumbnail: string
  url: string
  referrer: IUser
  createdAt?: string
  updatedAt?: string
}
