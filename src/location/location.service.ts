import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.LocationCreateArgs) {
    return await this.prisma.location.create(data);
  }

  // async delete(data: Prisma.LocationFindUniqueArgs){
  //   return await this.prisma.location.delete(data);
  // }

  async findMany(data: Prisma.LocationFindManyArgs) {
    return await this.prisma.location.findMany(data);
  }

  async findUnique(data: Prisma.LocationFindUniqueArgs) {
    return await this.prisma.location.findUnique(data);
  }
}
