import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';

const optionsDevelopment = {
  dialect: 'sqlite',
  storage: './dev.sqlite',
  autoLoadModels: true,
  synchronize: true,
}

const optionsProduction = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_PRODUCTION,
  username: process.env.DB_USER,
  port: parseInt(process.env.DB_PORT),
  password: process.env.DB_PASS,
  autoLoadModels: true,
  synchronize: true,
}

const sequelizeOptions = process.env.NODE_ENV === 'production'
  ? optionsProduction : optionsDevelopment;
;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot(
      {
        dialect: process.env.NODE_ENV === 'production' ? 'postgres' : 'sqlite',
        host: process.env.NODE_ENV === 'production' ? process.env.DB_HOST : 'localhost',
        storage: './dev.sqlite',
        database: process.env.DATABASE_URL,
        username: process.env.DB_USER,
        port: parseInt(process.env.DB_PORT),
        password: process.env.DB_PASS,
        autoLoadModels: true,
        synchronize: true,
      }
    ),
    LocationModule,
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: false,
      isGlobal: true,
      logging: true,
      enableAutoId: true,
      autoIdFieldName: 'id',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
