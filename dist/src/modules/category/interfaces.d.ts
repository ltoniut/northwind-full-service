import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
export declare const CategoryControllerKey = "CategoryController";
export declare const CategoryServiceKey = "CategoryService";
export declare const CategoryRepositoryKey = "CategoryRepository";
export interface CategoryController extends BaseController {
}
export interface CategoryService extends BaseService {
}
export interface CategoryRepository extends BaseRepository<Category> {
}
