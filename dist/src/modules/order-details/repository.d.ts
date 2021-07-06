import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { OrderDetails } from 'northwind-rest-commons/dist/typeorm/entities/OrderDetails';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class OrderDetailsRepositoryImpl extends TypeORMRepository<OrderDetails> {
    constructor(manager: EntityManager);
}
