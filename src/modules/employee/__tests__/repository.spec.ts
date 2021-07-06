import { Test } from '@nestjs/testing';
import { getEntityManagerToken } from '@nestjs/typeorm';
import { mockManager } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { EntityManager } from 'typeorm';
import { EmployeeRepositoryKey } from '../interfaces';
import { EmployeeRepositoryImpl } from '../repository';

describe('EmployeeRepository', () => {
  const managerToken = getEntityManagerToken();
  let manager: EntityManager;
  let repository: EmployeeRepositoryImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: managerToken,
          useFactory: mockManager(),
        },
        {
          provide: EmployeeRepositoryKey,
          useClass: EmployeeRepositoryImpl,
        },
      ],
    }).compile();
    manager = testModule.get<EntityManager>(managerToken);
    repository = testModule.get<EmployeeRepositoryImpl>(EmployeeRepositoryKey);
  });

  it('Should be defined', () => {
    expect(manager).toBeDefined();
    expect(repository).toBeDefined();
  });
});
