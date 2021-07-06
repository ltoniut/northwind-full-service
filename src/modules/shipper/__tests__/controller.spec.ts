import { Test } from '@nestjs/testing';
import { mockService } from 'northwind-rest-commons/dist/shared/tests/mock-factories';
import {} from 'northwind-rest-commons/dist/shared/tests/baseMocks';
import { ShipperControllerImpl } from '../controller';
import {
  ShipperController,
  ShipperControllerKey,
  ShipperService,
  ShipperServiceKey,
} from '../interfaces';

describe('ShipperController', () => {
  let service: ShipperService;
  let controller: ShipperController;

  beforeEach(async () => {
    const testModule = await Test.createTestingModule({
      providers: [
        {
          provide: ShipperServiceKey,
          useFactory: mockService(),
        },
        {
          provide: ShipperControllerKey,
          useClass: ShipperControllerImpl,
        },
      ],
    }).compile();
    service = testModule.get<ShipperService>(ShipperServiceKey);
    controller = testModule.get<ShipperController>(ShipperControllerKey,);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
