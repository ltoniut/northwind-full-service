import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { Shipper } from 'northwind-rest-commons/dist/typeorm/entities/Shipper';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class ShipperRepositoryImpl extends TypeORMRepository<Shipper> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Shipper,
      [],
      [],
      manager,
      {}
    );
  }
}
