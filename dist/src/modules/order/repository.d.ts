import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Order } from 'northwind-rest-commons/dist/typeorm/entities/Order';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class OrderRepositoryImpl extends TypeORMRepository<Order> {
    constructor(manager: EntityManager);
}
