import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { ProductRepository, ProductRepositoryKey } from '../interfaces';
import { ProductServiceImpl } from '../service';

loadSchemas();
describe('ProductService', () => {
  let repository: ProductRepository;
  let service: ProductServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        ProductServiceImpl,
        {
          provide: ProductRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<ProductRepository>(ProductRepositoryKey,);
    service = testModule.get<ProductServiceImpl>(ProductServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
