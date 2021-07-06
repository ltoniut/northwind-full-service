import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { OrderRepository, OrderRepositoryKey } from '../interfaces';
import { OrderServiceImpl } from '../service';

loadSchemas();
describe('OrderService', () => {
  let repository: OrderRepository;
  let service: OrderServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        OrderServiceImpl,
        {
          provide: OrderRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<OrderRepository>(OrderRepositoryKey,);
    service = testModule.get<OrderServiceImpl>(OrderServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
