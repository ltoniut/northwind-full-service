import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { OrderControllerImpl } from '../controller';
import {
  OrderController,
  OrderControllerKey,
  OrderService,
  OrderServiceKey,
} from '../interfaces';

describe('OrderController', () => {
  let service: OrderService;
  let controller: OrderController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: OrderServiceKey,
          useFactory: mockService(),
        },
        {
          provide: OrderControllerKey,
          useClass: OrderControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<OrderService>(OrderServiceKey);
    controller = testModule.get<OrderController>(OrderControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
