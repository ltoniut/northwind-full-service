import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { OrderDetails } from 'northwind-rest-commons/dist/models/OrderDetails';
import { OrderDetailsRepository } from './interfaces';
export declare class OrderDetailsServiceImpl extends BaseServiceImpl<OrderDetails, OrderDetailsRepository> {
    constructor(repository: OrderDetailsRepository);
}
