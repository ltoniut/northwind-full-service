// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Shipper } from 'northwind-rest-commons/dist/models/Shipper';
import { ShipperRepository, ShipperRepositoryKey } from './interfaces';

export class ShipperServiceImpl extends BaseServiceImpl<Shipper, ShipperRepository> {
  constructor(
    @Inject(ShipperRepositoryKey)
    repository: ShipperRepository,
  ) {
    super('Shipper', repository);
  }
}
