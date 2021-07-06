import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { CategoryRepositoryKey } from '../interfaces';
import { CategoryRepositoryImpl } from '../repository';

describe('CategoryRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: CategoryRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: CategoryRepositoryKey,
          useClass: CategoryRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<CategoryRepositoryImpl>(CategoryRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
