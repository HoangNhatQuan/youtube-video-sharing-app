import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios from 'axios'

@Injectable()
export class YoutubeApiService {
  constructor(private readonly configService: ConfigService) {}

  isValidYouTubeUrl(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    return regex.test(url)
  }

  async getYouTubeMetadata(videoId: string) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: 'snippet',
            id: videoId,
            key: this.configService.get<string>('YOUTUBE_API_KEY'),
          },
        },
      )

      const videoData = response.data.items[0].snippet
      return {
        title: videoData.title,
        thumbnailUrl: videoData.thumbnails.default.url,
        description: videoData.description,
      }
    } catch (error) {
      console.error('Error fetching YouTube metadata:', error)
      return null
    }
  }

  extractVideoId(url: string): string | null {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }
}
