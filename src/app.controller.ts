import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import {  ApiOperation, ApiResponse,  } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Show app home page (from app controller)' })
  @ApiResponse({ status: 201, description: 'The app home page is displayed.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @ApiOperation({ summary: 'Show app /hello response (from app controller)' })
  @ApiResponse({ status: 201, description: 'The app /hello response is displayed.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

}
