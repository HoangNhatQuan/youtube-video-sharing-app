import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { SignUpDto } from '../dto/sign-up.dto'
import { SignInDto } from '../dto/sign-in.dto'
import { ForgotPasswordDto } from '../dto/forgot-password.dto'
import { AuthGuard } from 'guards/auth.guard'
import { AuthService } from '../services/auth.service'
import { RefreshTokenDto } from '../dto/refresh-token.dto'
import { User } from '../entities/users.entity'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  @Post('/sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.signUp(signUpDto)
  }

  @Post('/sign-in')
  async signIn(@Body() loginDto: SignInDto) {
    return await this.authService.signIn(loginDto)
  }

  @Post('/sign-out')
  @UseGuards(AuthGuard)
  async signOut(@Req() req) {
    return await this.userModel.findByIdAndUpdate(
      req.userId,
      { isVerified: false },
      { new: true, upsert: true },
    )
  }

  @Post('refresh-token')
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto.refreshToken)
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.phone)
  }
}
