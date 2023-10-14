/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/
import { Response } from 'express';
import * as path from 'path';
import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get('/')
  getHtml(@Res() res: Response): void {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  }

  @Post('cadastrar')
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }
}