import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class CategoryRepositoryImpl extends TypeORMRepository<Category> {
    constructor(manager: EntityManager);
}
