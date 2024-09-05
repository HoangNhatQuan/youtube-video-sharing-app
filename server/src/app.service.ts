import { Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule';
@Injectable()
export class AppService {

    @Cron('*/15 * * * *')
  getHello(): string {
    return 'Hello World!'
  }
}
