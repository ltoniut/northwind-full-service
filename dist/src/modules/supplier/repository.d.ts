import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Supplier } from 'northwind-rest-commons/dist/typeorm/entities/Supplier';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class SupplierRepositoryImpl extends TypeORMRepository<Supplier> {
    constructor(manager: EntityManager);
}
