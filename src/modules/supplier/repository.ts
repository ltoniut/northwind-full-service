import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { Supplier } from 'northwind-rest-commons/dist/typeorm/entities/Supplier';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class SupplierRepositoryImpl extends TypeORMRepository<Supplier> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Supplier,
      [],
      [],
      manager,
      {}
    );
  }
}
