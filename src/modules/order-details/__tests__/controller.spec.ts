import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { OrderDetailsControllerImpl } from '../controller';
import {
  OrderDetailsController,
  OrderDetailsControllerKey,
  OrderDetailsService,
  OrderDetailsServiceKey,
} from '../interfaces';

describe('OrderDetailsController', () => {
  let service: OrderDetailsService;
  let controller: OrderDetailsController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: OrderDetailsServiceKey,
          useFactory: mockService(),
        },
        {
          provide: OrderDetailsControllerKey,
          useClass: OrderDetailsControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<OrderDetailsService>(OrderDetailsServiceKey);
    controller = testModule.get<OrderDetailsController>(OrderDetailsControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
