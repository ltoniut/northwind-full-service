import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { Customer } from 'northwind-rest-commons/dist/typeorm/entities/Customer';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class CustomerRepositoryImpl extends TypeORMRepository<Customer> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Customer,
      ['companyName', 'contactName', 'contactTitle', 'address', 'phone'],
      ['companyName', 'contactName', 'contactTitle', 'address', 'phone'],
      manager,
      {}
    );
  }
}
