import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { SupplierRepository, SupplierRepositoryKey } from '../interfaces';
import { SupplierServiceImpl } from '../service';

loadSchemas();
describe('SupplierService', () => {
  let repository: SupplierRepository;
  let service: SupplierServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        SupplierServiceImpl,
        {
          provide: SupplierRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<SupplierRepository>(SupplierRepositoryKey,);
    service = testModule.get<SupplierServiceImpl>(SupplierServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
