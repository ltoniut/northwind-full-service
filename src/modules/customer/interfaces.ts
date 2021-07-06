import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';

import { Customer } from 'northwind-rest-commons/dist/typeorm/entities/Customer';

export const CustomerControllerKey = 'CustomerController';
export const CustomerServiceKey = 'CustomerService';
export const CustomerRepositoryKey = 'CustomerRepository';

export interface CustomerController extends BaseController {}
export interface CustomerService extends BaseService {}
export interface CustomerRepository extends BaseRepository<Customer> {}
