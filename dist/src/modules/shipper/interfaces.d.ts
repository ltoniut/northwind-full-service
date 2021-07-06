import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';
import { Shipper } from 'northwind-rest-commons/dist/typeorm/entities/Shipper';
export declare const ShipperControllerKey = "ShipperController";
export declare const ShipperServiceKey = "ShipperService";
export declare const ShipperRepositoryKey = "ShipperRepository";
export interface ShipperController extends BaseController {
}
export interface ShipperService extends BaseService {
}
export interface ShipperRepository extends BaseRepository<Shipper> {
}
