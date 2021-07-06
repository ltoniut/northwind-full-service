import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';

import { Product } from 'northwind-rest-commons/dist/typeorm/entities/Product';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class ProductRepositoryImpl extends TypeORMRepository<Product> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Product,
      [],
      [],
      manager,
      {}
    );
  }

  async saveProductGroup(entity: { categoryName: string, description: string, picture?: string }) {
    const category = new Category();
    Object.assign(category, { entity });
    const newCategory = await this.manager.save(Category, category);

    return newCategory;
  }
}
