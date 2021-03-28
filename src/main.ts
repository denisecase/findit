import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv';
import Helmet from 'helmet';
import Session from 'express-session';
import Csurf from 'csurf';
import RateLimit from 'express-rate-limit';
import sslRedirect from 'heroku-ssl-redirect';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // configure middleware
  app.useStaticAssets(join(__dirname, '.', 'public'));
  app.setBaseViewsDir(join(__dirname, '.', 'views'));
  app.setViewEngine('ejs');

  // security middleware
  app.use(sslRedirect());
  app.use(Helmet());
  app.enableCors();
  app.use(
    Session({
      secret: 'ilovecats',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    }),
  );
  app.use(Csurf());
  app.use(
    RateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  // read .env variables into process.env
  dotenv.config();
  await app.listen(process.env.PORT);
}

bootstrap();
