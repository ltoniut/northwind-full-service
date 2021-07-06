// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { OrderDetails } from 'northwind-rest-commons/dist/models/OrderDetails';
import { OrderDetailsRepository, OrderDetailsRepositoryKey } from './interfaces';

export class OrderDetailsServiceImpl extends BaseServiceImpl<OrderDetails, OrderDetailsRepository> {
  constructor(
    @Inject(OrderDetailsRepositoryKey)
    repository: OrderDetailsRepository,
  ) {
    super('OrderDetails', repository);
  }
}
