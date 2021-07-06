import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';

import { Supplier } from 'northwind-rest-commons/dist/typeorm/entities/Supplier';

export const SupplierControllerKey = 'SupplierController';
export const SupplierServiceKey = 'SupplierService';
export const SupplierRepositoryKey = 'SupplierRepository';

export interface SupplierController extends BaseController {}
export interface SupplierService extends BaseService {}
export interface SupplierRepository extends BaseRepository<Supplier> {}
