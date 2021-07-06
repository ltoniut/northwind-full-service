import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { OrderDetailsRepositoryKey } from '../interfaces';
import { OrderDetailsRepositoryImpl } from '../repository';

describe('OrderDetailsRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: OrderDetailsRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: OrderDetailsRepositoryKey,
          useClass: OrderDetailsRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<OrderDetailsRepositoryImpl>(OrderDetailsRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
