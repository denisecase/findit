import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LocationCrudService } from './location-crud.service';
import { CreateLocationDto } from './../dto/create-location.dto';
import { UpdateLocationDto } from './../dto/update-location.dto';

@Controller('crud/location')
export class LocationCrudController {
  constructor(private readonly locationCrudService: LocationCrudService) {}

  @Post()
  async create(@Body() data: CreateLocationDto) {
    const dto: Prisma.LocationCreateArgs = {
      data: {
        name: data.name,
        north: data.north,
        west: data.west,
        south: data.south,
        east: data.east,
        isActive: data.isActive,
      },
    };
    return await this.locationCrudService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.LocationFindManyArgs = {
      where: {},
    };
    return await this.locationCrudService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.LocationFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.locationCrudService.findUnique(dto);
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
