import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
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

  // configure CSP first
  const permissivePolicy = `
  default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval' 'unsafe-dynamic'; 
  script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; 
  connect-src * data: blob: 'unsafe-inline'; 
  img-src * data: blob: 'unsafe-inline'; 
  frame-src * data: blob: ; 
  style-src * data: blob: 'unsafe-inline';
  font-src * data: blob: 'unsafe-inline';
`;

const shortPermissivePolicy = `default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';`

  const cspPolicy = `
 default-src 'self' fonts.googleapis.com https://cdnjs.cloudflare.com use.fontawesome.com;
 font-src 'self' fonts.googleapis.com https://cdnjs.cloudflare.com use.fontawesome.com; 
 img-src 'self' fonts.googleapis.com https://cdnjs.cloudflare.com use.fontawesome.com; " +
 script-src 'self' fonts.googleapis.com https://cdnjs.cloudflare.com ;" + 
 style-src 'unsafe-inline' 'self' fonts.googleapis.com https://cdnjs.cloudflare.com ; 
 frame-src 'self';
`;

  // CSP is insanely obtuse
  app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      shortPermissivePolicy
    );
    next();
  });

  // configure middleware
  app.useStaticAssets(join(__dirname, '.', 'public'));
  app.setBaseViewsDir(join(__dirname, '.', 'views'));
  app.setViewEngine('ejs');

  // security middleware
  app.use(sslRedirect());
  // app.use(Helmet());
  app.enableCors();
  app.use(
    Session({
      secret: 'ilovecats',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    }),
  );
  // app.use(Csurf());
  app.use(
    RateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  // read .env variables into process.env
  dotenv.config();

  // generate Swagger API
  const config = new DocumentBuilder()
    .setTitle('Findit!')
    .setDescription('Findit API built with Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // start listening
  await app.listen(process.env.PORT);
}

bootstrap();
