import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Customer } from 'northwind-rest-commons/dist/models/Customer';
import { CustomerRepository } from './interfaces';
export declare class CustomerServiceImpl extends BaseServiceImpl<Customer, CustomerRepository> {
    constructor(repository: CustomerRepository);
}
