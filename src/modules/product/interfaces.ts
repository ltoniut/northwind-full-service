import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';

import { Product } from 'northwind-rest-commons/dist/typeorm/entities/Product';
import { ProductServiceImpl } from './service';

export const ProductControllerKey = 'ProductController';
export const ProductServiceKey = 'ProductService';
export const ProductRepositoryKey = 'ProductRepository';

export interface ProductController extends BaseController {};
export interface ProductService extends ProductServiceImpl {};
export interface ProductRepository extends BaseRepository<Product> {};
