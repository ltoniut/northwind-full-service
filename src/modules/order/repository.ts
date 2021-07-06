import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { Order } from 'northwind-rest-commons/dist/typeorm/entities/Order';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class OrderRepositoryImpl extends TypeORMRepository<Order> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Order,
      [
        'customerId',
        'orderDate',
        'requiredDate',
        'shippedDate',
        'shipVia',
        'freight',
        'shipName',
        'shipAddress',
        'shipCity',
        'shipPostalCode',
        'shipCountry',
      ],
      [
        'customerId',
        'orderDate',
        'requiredDate',
        'shippedDate',
        'shipVia',
        'freight',
        'shipName',
        'shipAddress',
        'shipCity',
        'shipPostalCode',
        'shipCountry',
      ],
      manager,
      {},
    );
  }
}
