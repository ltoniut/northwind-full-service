import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';

import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';

export const CategoryControllerKey = 'CategoryController';
export const CategoryServiceKey = 'CategoryService';
export const CategoryRepositoryKey = 'CategoryRepository';

export interface CategoryController extends BaseController {}
export interface CategoryService extends BaseService {}
export interface CategoryRepository extends BaseRepository<Category> {}
