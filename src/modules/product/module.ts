import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepositoryKey, CategoryServiceKey } from 'modules/category/interfaces';
import { CategoryRepositoryImpl } from 'modules/category/repository';
import { CategoryServiceImpl } from 'modules/category/service';
import { Product } from 'northwind-rest-commons/dist/typeorm/entities/Product';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { ProductControllerImpl } from './controller';
import { ProductRepositoryKey, ProductServiceKey } from './interfaces';
import { ProductRepositoryImpl } from './repository';
import { ProductServiceImpl } from './service';
@Module({
  controllers: [ProductControllerImpl],
  imports: [TypeOrmModule.forFeature([Category, Product])],
  providers: [
    {
      provide: ProductRepositoryKey,
      useClass: ProductRepositoryImpl,
    },
    {
      provide: ProductServiceKey,
      useClass: ProductServiceImpl,
    },
    {
      provide: CategoryServiceKey,
      useClass: CategoryServiceImpl,
    }
  ],
})
export class ProductModule {}
