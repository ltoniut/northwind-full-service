import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';

import { OrderDetails } from 'northwind-rest-commons/dist/typeorm/entities/OrderDetails';

export const OrderDetailsControllerKey = 'OrderDetailsController';
export const OrderDetailsServiceKey = 'OrderDetailsService';
export const OrderDetailsRepositoryKey = 'OrderDetailsRepository';

export interface OrderDetailsController extends BaseController {}
export interface OrderDetailsService extends BaseService {}
export interface OrderDetailsRepository extends BaseRepository<OrderDetails> {}
