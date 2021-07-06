import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { CustomerService, CustomerServiceKey } from './interfaces';

const controllerPath =  'customer';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class CustomerControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(CustomerServiceKey)
    service: CustomerService,
  ) {
    super(service, controllerPath);
  }
}