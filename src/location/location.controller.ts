import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async create(@Body() data: CreateLocationDto) {
    const dto: Prisma.LocationCreateArgs = {
      data: {
        name: data.name,
        north: data.north,
        west: data.west,
        south: data.south,
        east: data.east,
      },
    };
    return await this.locationService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.LocationFindManyArgs = {
      where: {},
    };
    return await this.locationService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.LocationFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.locationService.findUnique(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateLocationDto) {
    // actual implementation
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // actual implementation
  }
}
