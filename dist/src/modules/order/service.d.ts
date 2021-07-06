import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Order } from 'northwind-rest-commons/dist/models/Order';
import { OrderRepository } from './interfaces';
export declare class OrderServiceImpl extends BaseServiceImpl<Order, OrderRepository> {
    constructor(repository: OrderRepository);
}
