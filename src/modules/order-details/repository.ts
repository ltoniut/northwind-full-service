import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { OrderDetails } from 'northwind-rest-commons/dist/typeorm/entities/OrderDetails';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class OrderDetailsRepositoryImpl extends TypeORMRepository<OrderDetails> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      OrderDetails,
      [],
      [],
      manager,
      {}
    );
  }
}
