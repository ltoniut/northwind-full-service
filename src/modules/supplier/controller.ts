import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { SupplierService, SupplierServiceKey } from './interfaces';

const controllerPath =  'supplier';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class SupplierControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(SupplierServiceKey)
    service: SupplierService,
  ) {
    super(service, controllerPath);
  }
}