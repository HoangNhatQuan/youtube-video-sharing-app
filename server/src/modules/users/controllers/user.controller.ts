import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User } from '../entities/users.entity'
import { AuthGuard } from 'guards/auth.guard'
import { UpdateUserDto } from '../dto/update-user.dto'

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  @Get(':id')
  async findOne(@Req() req, @Param('id') id: string) {
    if (req.userId !== id) {
      throw new NotFoundException('User not found')
    }
    return await this.userModel.findById(req.userId)
  }

  @Patch(':id')
  async update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(req.userId, updateUserDto, {
      new: true,
      upsert: true,
    })
  }

  @Delete(':id')
  async remove(@Req() req) {
    return await this.userModel.findByIdAndDelete(req.userId)
  }
}
