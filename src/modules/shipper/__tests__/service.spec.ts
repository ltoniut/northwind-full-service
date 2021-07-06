import { Test } from '@nestjs/testing';
import { mockRepository } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import { loadSchemas } from 'northwind-rest-commons/dist/schemas/model-builders';
import { ShipperRepository, ShipperRepositoryKey } from '../interfaces';
import { ShipperServiceImpl } from '../service';

loadSchemas();
describe('ShipperService', () => {
  let repository: ShipperRepository;
  let service: ShipperServiceImpl;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        ShipperServiceImpl,
        {
          provide: ShipperRepositoryKey,
          useFactory: mockRepository(),
        },
      ],
    }).compile();

    repository = testModule.get<ShipperRepository>(ShipperRepositoryKey,);
    service = testModule.get<ShipperServiceImpl>(ShipperServiceImpl);  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
