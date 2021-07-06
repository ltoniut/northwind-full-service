import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { ShipperService, ShipperServiceKey } from './interfaces';

const controllerPath =  'shipper';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class ShipperControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(ShipperServiceKey)
    service: ShipperService,
  ) {
    super(service, controllerPath);
  }
}