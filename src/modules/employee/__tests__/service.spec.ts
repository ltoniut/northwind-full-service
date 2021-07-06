import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { EmployeeRepository, EmployeeRepositoryKey } from '../interfaces';
import { EmployeeServiceImpl } from '../service';

loadSchemas();
describe('EmployeeService', () => {
  let repository: EmployeeRepository;
  let service: EmployeeServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        EmployeeServiceImpl,
        {
          provide: EmployeeRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<EmployeeRepository>(EmployeeRepositoryKey,);
    service = testModule.get<EmployeeServiceImpl>(EmployeeServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
