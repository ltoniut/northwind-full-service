import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { CustomerRepositoryKey } from '../interfaces';
import { CustomerRepositoryImpl } from '../repository';

describe('CustomerRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: CustomerRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: CustomerRepositoryKey,
          useClass: CustomerRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<CustomerRepositoryImpl>(CustomerRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
