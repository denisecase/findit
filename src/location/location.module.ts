import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { LocationCrudService } from './crud/location-crud.service';
import { LocationCrudController } from './crud/location-crud.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LocationController, LocationCrudController],
  providers: [LocationService, LocationCrudService],
})
export class LocationModule {}
