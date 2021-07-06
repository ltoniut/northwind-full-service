import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Category } from 'northwind-rest-commons/dist/models/Category';
import { CategoryRepository } from './interfaces';
export declare class CategoryServiceImpl extends BaseServiceImpl<Category, CategoryRepository> {
    constructor(repository: CategoryRepository);
}
