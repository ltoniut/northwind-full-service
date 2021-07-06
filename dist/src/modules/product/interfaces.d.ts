import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';
import { Product } from 'northwind-rest-commons/dist/typeorm/entities/Product';
export declare const ProductControllerKey = "ProductController";
export declare const ProductServiceKey = "ProductService";
export declare const ProductRepositoryKey = "ProductRepository";
export interface ProductController extends BaseController {
}
export interface ProductService extends BaseService {
}
export interface ProductRepository extends BaseRepository<Product> {
}
