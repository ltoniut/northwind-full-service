// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Category } from 'northwind-rest-commons/dist/models/Category';
import { CategoryRepository, CategoryRepositoryKey } from './interfaces';

export class CategoryServiceImpl extends BaseServiceImpl<Category, CategoryRepository> {
  constructor(
    @Inject(CategoryRepositoryKey)
    repository: CategoryRepository,
  ) {
    super('Category', repository);
  }
}
