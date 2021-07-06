import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { CategoryRepository, CategoryRepositoryKey } from '../interfaces';
import { CategoryServiceImpl } from '../service';

loadSchemas();
describe('CategoryService', () => {
  let repository: CategoryRepository;
  let service: CategoryServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        CategoryServiceImpl,
        {
          provide: CategoryRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<CategoryRepository>(CategoryRepositoryKey,);
    service = testModule.get<CategoryServiceImpl>(CategoryServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
