import { Injectable } from '@nestjs/common'
import { Interval } from '@nestjs/schedule';
@Injectable()
export class AppService {

  @Interval(120000)
  getHello(): string {
    console.log('Hello World!')
    return 'Success'
  }
}
