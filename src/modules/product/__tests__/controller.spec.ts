import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { ProductControllerImpl } from '../controller';
import {
  ProductController,
  ProductControllerKey,
  ProductService,
  ProductServiceKey,
} from '../interfaces';

describe('ProductController', () => {
  let service: ProductService;
  let controller: ProductController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductServiceKey,
          useFactory: mockService(),
        },
        {
          provide: ProductControllerKey,
          useClass: ProductControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<ProductService>(ProductServiceKey);
    controller = testModule.get<ProductController>(ProductControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
