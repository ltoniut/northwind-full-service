// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Supplier } from 'northwind-rest-commons/dist/models/Supplier';
import { SupplierRepository, SupplierRepositoryKey } from './interfaces';

export class SupplierServiceImpl extends BaseServiceImpl<Supplier, SupplierRepository> {
  constructor(
    @Inject(SupplierRepositoryKey)
    repository: SupplierRepository,
  ) {
    super('Supplier', repository);
  }
}
