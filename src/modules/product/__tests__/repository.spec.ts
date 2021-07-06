import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { ProductRepositoryKey } from '../interfaces';
import { ProductRepositoryImpl } from '../repository';

describe('ProductRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: ProductRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: ProductRepositoryKey,
          useClass: ProductRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<ProductRepositoryImpl>(ProductRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
