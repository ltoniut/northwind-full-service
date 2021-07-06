// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Employee } from 'northwind-rest-commons/dist/models/Employee';
import { EmployeeRepository, EmployeeRepositoryKey } from './interfaces';

export class EmployeeServiceImpl extends BaseServiceImpl<Employee, EmployeeRepository> {
  constructor(
    @Inject(EmployeeRepositoryKey)
    repository: EmployeeRepository,
  ) {
    super('Employee', repository);
  }
}
