import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { SupplierControllerImpl } from '../controller';
import {
  SupplierController,
  SupplierControllerKey,
  SupplierService,
  SupplierServiceKey,
} from '../interfaces';

describe('SupplierController', () => {
  let service: SupplierService;
  let controller: SupplierController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: SupplierServiceKey,
          useFactory: mockService(),
        },
        {
          provide: SupplierControllerKey,
          useClass: SupplierControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<SupplierService>(SupplierServiceKey);
    controller = testModule.get<SupplierController>(SupplierControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
