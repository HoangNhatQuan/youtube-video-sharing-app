import { IsNotEmpty, IsString } from 'class-validator'

export class ShareVideoDto {
  @IsString()
  @IsNotEmpty()
  referrerId: string

  @IsString()
  @IsNotEmpty()
  url: string
}
