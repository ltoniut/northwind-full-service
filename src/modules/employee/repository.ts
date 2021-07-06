import { InjectEntityManager } from '@nestjs/typeorm';
import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';

import { Employee } from 'northwind-rest-commons/dist/typeorm/entities/Employee';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
// eslint-disable-next-line no-unused-vars

export class EmployeeRepositoryImpl extends TypeORMRepository<Employee> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
  ) {
    super(
      Employee,
      [],
      [],
      manager,
      {}
    );
  }
}
