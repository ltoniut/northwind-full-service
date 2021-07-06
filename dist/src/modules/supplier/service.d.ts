import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Supplier } from 'northwind-rest-commons/dist/models/Supplier';
import { SupplierRepository } from './interfaces';
export declare class SupplierServiceImpl extends BaseServiceImpl<Supplier, SupplierRepository> {
    constructor(repository: SupplierRepository);
}
