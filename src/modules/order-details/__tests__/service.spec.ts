import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { OrderDetailsRepository, OrderDetailsRepositoryKey } from '../interfaces';
import { OrderDetailsServiceImpl } from '../service';

loadSchemas();
describe('OrderDetailsService', () => {
  let repository: OrderDetailsRepository;
  let service: OrderDetailsServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        OrderDetailsServiceImpl,
        {
          provide: OrderDetailsRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<OrderDetailsRepository>(OrderDetailsRepositoryKey,);
    service = testModule.get<OrderDetailsServiceImpl>(OrderDetailsServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
