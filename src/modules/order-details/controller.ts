import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { OrderDetailsService, OrderDetailsServiceKey } from './interfaces';

const controllerPath =  'orderDetails';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class OrderDetailsControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(OrderDetailsServiceKey)
    service: OrderDetailsService,
  ) {
    super(service, controllerPath);
  }
}