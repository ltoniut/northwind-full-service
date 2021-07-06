import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Shipper } from 'northwind-rest-commons/dist/models/Shipper';
import { ShipperRepository } from './interfaces';
export declare class ShipperServiceImpl extends BaseServiceImpl<Shipper, ShipperRepository> {
    constructor(repository: ShipperRepository);
}
