import { Module } from '@nestjs/common';
import { OrderControllerImpl } from './controller';
import { OrderRepositoryKey, OrderServiceKey } from './interfaces';
import { OrderRepositoryImpl } from './repository';
import { OrderServiceImpl } from './service';
@Module({
  controllers: [OrderControllerImpl],
  providers: [
    {
      provide: OrderRepositoryKey,
      useClass: OrderRepositoryImpl,
    },
    {
      provide: OrderServiceKey,
      useClass: OrderServiceImpl,
    },
  ],
})
export class OrderModule {}
