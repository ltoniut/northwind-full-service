import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { OrderService, OrderServiceKey } from './interfaces';

const controllerPath =  'order';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class OrderControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(OrderServiceKey)
    service: OrderService,
  ) {
    super(service, controllerPath);
  }
}