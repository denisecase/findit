import { Column, Model, Table , AllowNull, Unique, Default, DataType, Length, Min, Max} from 'sequelize-typescript';
import { DefaultDeserializer } from 'v8';

@Table
export class Location extends Model<Location> {

  @AllowNull(false)
  @Unique(true)
  @Default('Location')
  @Length({max: 100, min: 4})
  @Column({type: DataType.STRING  })
  Name: string;

  @AllowNull(false)
  @Min(-90)
  @Max(90)
  @Default(40.36029)
  @Column({type: DataType.FLOAT })
  North: number;

  @AllowNull(false)
  @Min(-180)
  @Max(180)
  @Default(-94.89490)
  @Column({type: DataType.FLOAT  })
  West: number;

  @AllowNull(false)
  @Min(-90)
  @Max(90)
  @Default(40.34655)
  @Column({type: DataType.FLOAT  })
  South: number;

  @AllowNull(false)
  @Min(-180)
  @Max(180)
  @Default(-94.85598)
  @Column({type: DataType.FLOAT  })
  East: number;

  @AllowNull(false)
  @Default(true)
  @Column({type: DataType.FLOAT  })
  isActive: boolean;
}