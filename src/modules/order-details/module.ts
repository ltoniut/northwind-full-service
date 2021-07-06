import { Module } from '@nestjs/common';
import { OrderDetailsControllerImpl } from './controller';
import { OrderDetailsRepositoryKey, OrderDetailsServiceKey } from './interfaces';
import { OrderDetailsRepositoryImpl } from './repository';
import { OrderDetailsServiceImpl } from './service';
@Module({
  controllers: [OrderDetailsControllerImpl],
  providers: [
    {
      provide: OrderDetailsRepositoryKey,
      useClass: OrderDetailsRepositoryImpl,
    },
    {
      provide: OrderDetailsServiceKey,
      useClass: OrderDetailsServiceImpl,
    },
  ],
})
export class OrderDetailsModule {}
