import { Controller, Get, Post, Body, Param, Render, Res, Redirect } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { identity } from 'rxjs';


/**
 * Location controller handles about a variety of requests 
 * 2 for JSON (findOne:id, findAll)
 * 1 for JSON (random)
 * 5 for showing pages (CRUDL)
 * 3 for executing database actions (delegated to crud controller)
 * 
 * @Render indicates which view to render
 */
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) { }

  // handle two requests for JSON (HTTP GET)

  @Get('findAll/')
  async findAll() {
    const dto: Prisma.LocationFindManyArgs = {
      where: {},
    };
    return await this.locationService.findMany(dto);
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.LocationFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.locationService.findUnique(dto);
  }

  // handle one request for a random location (as JSON) 

  @Get('random/')
  async findRandom() {
    const dto: Prisma.LocationFindManyArgs = {
      where: {},
    };
    return await this.locationService.findRandom(dto);
  }

  // handle four-five requests to show webpages (HTTP GET)

  @Get('/')
  @Render('./locations/index')
  async showIndex() {
    const dto: Prisma.LocationFindManyArgs = {
      where: {},
    };
    return { locations: await this.locationService.findMany(dto) };
  }

  @Get('create/')
  @Render('./locations/create')
  async showCreate() {
    const location = {
      name: 'NewLocation',
      north: 40.351133,
      west: -94.882717,
      south: 40.351049,
      east: -94.882375,
    };
    return { location };
  }

  @Get('details/:id')
  @Render('./locations/details')
  async showDetails(@Param('id') id: string) {
    try {
      const dto: Prisma.LocationFindUniqueArgs = {
        where: { id: parseInt(id) },
      };
      return { location: await this.locationService.findUnique(dto) };

    }
    catch (error) {
      return {
        location: { error: `No location with id=${id}` }
      }
    }
  }

  @Get('edit/:id')
  @Render('./locations/edit')
  async showEdit(@Param('id') id: string) {
    try {
      const dto: Prisma.LocationFindUniqueArgs = {
        where: { id: parseInt(id) },
      };
      return { location: await this.locationService.findUnique(dto) };

    }
    catch (error) {
      return {
        location: { error: `No location with id=${id}` }
      }
    }
  }

  @Get('delete/:id')
  @Render('./locations/delete')
  async showDelete(@Param('id') id: string) {
    try {
      const dto: Prisma.LocationFindUniqueArgs = {
        where: { id: parseInt(id) },
      };
      return { location: await this.locationService.findUnique(dto) };
    }
    catch (error) {
      return {
        location: { error: `No location with id=${id}` }
      }
    }
  }

  // 3 for database actions

  @ApiOperation({ summary: 'Create location' })
  @ApiResponse({ status: 201, description: 'The location has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('save')
  async saveNew(
    @Body('location') responseBody: CreateLocationDto,
    @Res() res: Response) {
    console.log(JSON.stringify(responseBody));
    const dto: Prisma.LocationCreateArgs = {
      data: {
        name: responseBody.name,
        north: responseBody.north,
        west: responseBody.west,
        south: responseBody.south,
        east: responseBody.east,
      },
    };
    const result = await this.locationService.saveNew(dto);
    res.redirect('/locations');
  }

  @ApiOperation({ summary: 'Update location' })
  @ApiResponse({ status: 201, description: 'The location has been successfully updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('save/:id')
  async saveEdit(
    @Param('id') id: string,
    @Body() location: UpdateLocationDto,
    @Res() res: Response,) {
      console.info( JSON.stringify(location));
    const dto: Prisma.LocationUpdateArgs = {
      where: { id: parseInt(id) },
      data: {
        name: location.name,
        north: location.north,
        west: location.west,
        south: location.south,
        east: location.east,
      },
    };
    const result = await this.locationService.saveEdit(dto);
    return JSON.stringify(dto);
   // res.redirect('/locations');
  }

  @ApiOperation({ summary: 'Delete location' })
  @ApiResponse({ status: 201, description: 'The location has been successfully deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('delete/:id')
  async deleteLocation(
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const dto: Prisma.LocationFindUniqueArgs = {
      where: { id: +id },
    };
    const result = await this.locationService.deleteLocation(dto);
    res.redirect('/locations');
  }

}