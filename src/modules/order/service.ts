// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Order } from 'northwind-rest-commons/dist/models/Order';
import { OrderRepository, OrderRepositoryKey } from './interfaces';

export class OrderServiceImpl extends BaseServiceImpl<Order, OrderRepository> {
  constructor(
    @Inject(OrderRepositoryKey)
    repository: OrderRepository,
  ) {
    super('Order', repository);
  }
}
