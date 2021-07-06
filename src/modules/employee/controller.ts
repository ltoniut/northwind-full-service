import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { EmployeeService, EmployeeServiceKey } from './interfaces';

const controllerPath =  'employee';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class EmployeeControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(EmployeeServiceKey)
    service: EmployeeService,
  ) {
    super(service, controllerPath);
  }
}