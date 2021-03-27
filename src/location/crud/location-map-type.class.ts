import { Prisma } from '@prisma/client';
import { CrudMapType } from 'src/crud/interfaces/crud-map-type.interface';

export class LocationMapType implements CrudMapType {
  aggregate: Prisma.LocationAggregateArgs;
  count: Prisma.LocationCountArgs;
  create: Prisma.LocationCreateArgs;
  delete: Prisma.LocationDeleteArgs;
  deleteMany: Prisma.LocationDeleteManyArgs;
  findFirst: Prisma.LocationFindFirstArgs;
  findMany: Prisma.LocationFindManyArgs;
  findUnique: Prisma.LocationFindUniqueArgs;
  update: Prisma.LocationUpdateArgs;
  updateMany: Prisma.LocationUpdateManyArgs;
  upsert: Prisma.LocationUpsertArgs;
}
