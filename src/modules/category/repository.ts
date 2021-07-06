import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class CategoryRepositoryImpl extends TypeORMRepository<Category> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Category,
      [],
      [],
      manager,
      {}
    );
  }
}
