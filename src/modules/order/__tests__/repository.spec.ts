import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { OrderRepositoryKey } from '../interfaces';
import { OrderRepositoryImpl } from '../repository';

describe('OrderRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: OrderRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: OrderRepositoryKey,
          useClass: OrderRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<OrderRepositoryImpl>(OrderRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
