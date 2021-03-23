import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// enable access to Express API
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import * as dotenv from 'dotenv';

// https://docs.nestjs.com/techniques/mvc#model-view-controller

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // configure middleware
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs') 

  // read .env variables into process.env
  dotenv.config()

  await app.listen(process.env.PORT);
}

bootstrap();
