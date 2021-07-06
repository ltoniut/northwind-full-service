// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Customer } from 'northwind-rest-commons/dist/models/Customer';
import { CustomerRepository, CustomerRepositoryKey } from './interfaces';

export class CustomerServiceImpl extends BaseServiceImpl<Customer, CustomerRepository> {
  constructor(
    @Inject(CustomerRepositoryKey)
    repository: CustomerRepository,
  ) {
    super('Customer', repository);
  }
}
