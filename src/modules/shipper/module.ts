import { Module } from '@nestjs/common';
import { ShipperControllerImpl } from './controller';
import { ShipperRepositoryKey, ShipperServiceKey } from './interfaces';
import { ShipperRepositoryImpl } from './repository';
import { ShipperServiceImpl } from './service';
@Module({
  controllers: [ShipperControllerImpl],
  providers: [
    {
      provide: ShipperRepositoryKey,
      useClass: ShipperRepositoryImpl,
    },
    {
      provide: ShipperServiceKey,
      useClass: ShipperServiceImpl,
    },
  ],
})
export class ShipperModule {}
