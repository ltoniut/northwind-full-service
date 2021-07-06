import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { SupplierRepositoryKey } from '../interfaces';
import { SupplierRepositoryImpl } from '../repository';

describe('SupplierRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: SupplierRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: SupplierRepositoryKey,
          useClass: SupplierRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<SupplierRepositoryImpl>(SupplierRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
