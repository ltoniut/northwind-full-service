import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { CustomerRepository, CustomerRepositoryKey } from '../interfaces';
import { CustomerServiceImpl } from '../service';

loadSchemas();
describe('CustomerService', () => {
  let repository: CustomerRepository;
  let service: CustomerServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        CustomerServiceImpl,
        {
          provide: CustomerRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<CustomerRepository>(CustomerRepositoryKey,);
    service = testModule.get<CustomerServiceImpl>(CustomerServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
