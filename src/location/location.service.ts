import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './location.model';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {

    constructor(
      @InjectModel(Location)
      private locationModel: typeof Location,
    ) {}

  create(createLocationDto: CreateLocationDto) {
    return 'This action adds a new location';
  }

  async findAll(): Promise<Location[]> {
    return this.locationModel.findAll();
  }

  findOne(id: string): Promise<Location> {
    return this.locationModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  async remove(id: string): Promise<void> {
    const location = await this.findOne(id);
    await location.destroy();
  }
}
