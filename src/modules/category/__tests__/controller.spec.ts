import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { CategoryControllerImpl } from '../controller';
import {
  CategoryController,
  CategoryControllerKey,
  CategoryService,
  CategoryServiceKey,
} from '../interfaces';

describe('CategoryController', () => {
  let service: CategoryService;
  let controller: CategoryController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: CategoryServiceKey,
          useFactory: mockService(),
        },
        {
          provide: CategoryControllerKey,
          useClass: CategoryControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<CategoryService>(CategoryServiceKey);
    controller = testModule.get<CategoryController>(CategoryControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
