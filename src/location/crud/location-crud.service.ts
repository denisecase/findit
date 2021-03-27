import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/crud/crud.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocationMapType } from './location-map-type.class';

@Injectable()
export class LocationCrudService extends CrudService<
  Prisma.LocationDelegate<Location>,
  LocationMapType
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.location);
  }

  // everything is set up
}
