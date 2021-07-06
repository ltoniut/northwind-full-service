import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { EmployeeControllerImpl } from '../controller';
import {
  EmployeeController,
  EmployeeControllerKey,
  EmployeeService,
  EmployeeServiceKey,
} from '../interfaces';

describe('EmployeeController', () => {
  let service: EmployeeService;
  let controller: EmployeeController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeServiceKey,
          useFactory: mockService(),
        },
        {
          provide: EmployeeControllerKey,
          useClass: EmployeeControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<EmployeeService>(EmployeeServiceKey);
    controller = testModule.get<EmployeeController>(EmployeeControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
