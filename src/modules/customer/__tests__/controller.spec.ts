import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { CustomerControllerImpl } from '../controller';
import {
  CustomerController,
  CustomerControllerKey,
  CustomerService,
  CustomerServiceKey,
} from '../interfaces';

describe('CustomerController', () => {
  let service: CustomerService;
  let controller: CustomerController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: CustomerServiceKey,
          useFactory: mockService(),
        },
        {
          provide: CustomerControllerKey,
          useClass: CustomerControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<CustomerService>(CustomerServiceKey);
    controller = testModule.get<CustomerController>(CustomerControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
