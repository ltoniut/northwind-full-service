import { Module } from '@nestjs/common';
import { ProductControllerImpl } from './controller';
import { ProductRepositoryKey, ProductServiceKey } from './interfaces';
import { ProductRepositoryImpl } from './repository';
import { ProductServiceImpl } from './service';
@Module({
  controllers: [ProductControllerImpl],
  providers: [
    {
      provide: ProductRepositoryKey,
      useClass: ProductRepositoryImpl,
    },
    {
      provide: ProductServiceKey,
      useClass: ProductServiceImpl,
    },
  ],
})
export class ProductModule {}
