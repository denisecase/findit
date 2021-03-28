import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) { }

  // three user-requested actions on the database
  
  async saveNew(data: Prisma.LocationCreateArgs) {
      return await this.prisma.location.create({
        data,
      });
  }

  async saveEdit(params: Prisma.LocationUpdateArgs) {
    const { where, data } = params;
    return await this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteLocation(data: Prisma.LocationDeleteArgs) {
    return await this.prisma.location.delete(data);
  }

  async findMany(data: Prisma.LocationFindManyArgs) {
    return await this.prisma.location.findMany(data);
  }

  async findUnique(data: Prisma.LocationFindUniqueArgs) {
    return await this.prisma.location.findUnique(data);
  }

  getRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async findRandom(data: Prisma.LocationFindManyArgs) {
    const locationsPromise = await this.findMany(data);
    const count = locationsPromise.length;
    const randomIndex = this.getRandomNumberBetween(0, count);
    const dto: Prisma.LocationFindUniqueArgs = {
      where: { id: locationsPromise[randomIndex].id },
    };
    return await this.prisma.location.findUnique(dto);
  }
}
