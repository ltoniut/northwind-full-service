import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Customer } from 'northwind-rest-commons/dist/typeorm/entities/Customer';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class CustomerRepositoryImpl extends TypeORMRepository<Customer> {
    constructor(manager: EntityManager);
}
