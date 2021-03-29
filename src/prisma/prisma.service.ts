import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  clearDatabase() {
    const models = Reflect.ownKeys(this).filter(key=> key[0] !== '_');

    return Promise.all(
      models.map(modelKey => this[modelKey].deleteMany()),
    );
  }
}
