import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Shipper } from 'northwind-rest-commons/dist/typeorm/entities/Shipper';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class ShipperRepositoryImpl extends TypeORMRepository<Shipper> {
    constructor(manager: EntityManager);
}
