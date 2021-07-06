import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { ShipperRepositoryKey } from '../interfaces';
import { ShipperRepositoryImpl } from '../repository';

describe('ShipperRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: ShipperRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: ShipperRepositoryKey,
          useClass: ShipperRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<ShipperRepositoryImpl>(ShipperRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
