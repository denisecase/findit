import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: (process.env.NODE_ENV == 'dev') ? 'sqlite' : 'postgres',
      storage: (process.env.NODE_ENV == 'dev') ? './dev.sqlite' : process.env.DATABASE_URL,
      ssl: (process.env.NODE_ENV == 'dev') ? false : true,
      dialectOptions: {
        "ssl": {"require":(process.env.NODE_ENV == 'dev') ? false : true }
      },
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOSTNAME || 'localhost',
      port: parseInt(process.env.DB_PORT ) || 5432,
      autoLoadModels: true,
      synchronize: true,
    }),
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
