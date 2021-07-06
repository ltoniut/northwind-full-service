import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { Product } from 'northwind-rest-commons/dist/typeorm/entities/Product';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class ProductRepositoryImpl extends TypeORMRepository<Product> {
    constructor(manager: EntityManager);
    saveProductGroup(entity: {
        categoryName: string;
        description: string;
        picture?: string;
    }): Promise<Category>;
}
