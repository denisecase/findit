import { Column, Model, Table, HasMany } from 'sequelize-typescript';

@Table
export class Location extends Model<Location> {

  @Column
  Name: string;

  @Column
  North: number;

  @Column
  West: number;

  @Column
  South: number;

  @Column
  East: number;

  @Column
  IsActive: boolean;


}
