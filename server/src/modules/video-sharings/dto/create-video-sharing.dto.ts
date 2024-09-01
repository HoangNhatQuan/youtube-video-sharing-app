import { IsNotEmpty, IsString } from 'class-validator'

export class CreateVideoSharingDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  url: string
}
