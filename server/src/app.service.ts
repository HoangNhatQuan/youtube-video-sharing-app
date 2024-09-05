import { Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule';
@Injectable()
export class AppService {

  @Cron('*/15 * * * *')
  getHello() {
    console.log('Hello World!')
  }
}
