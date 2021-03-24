import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Location } from './location.model';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { LocationSeeder } from './location.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Location]), 
    SeederModule.forFeature([LocationSeeder]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
  exports: [SequelizeModule],
})
export class LocationModule { }
