import { Module } from '@nestjs/common';
import { SupplierControllerImpl } from './controller';
import { SupplierRepositoryKey, SupplierServiceKey } from './interfaces';
import { SupplierRepositoryImpl } from './repository';
import { SupplierServiceImpl } from './service';
@Module({
  controllers: [SupplierControllerImpl],
  providers: [
    {
      provide: SupplierRepositoryKey,
      useClass: SupplierRepositoryImpl,
    },
    {
      provide: SupplierServiceKey,
      useClass: SupplierServiceImpl,
    },
  ],
})
export class SupplierModule {}
