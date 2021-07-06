import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';
import { Order } from 'northwind-rest-commons/dist/typeorm/entities/Order';
export declare const OrderControllerKey = "OrderController";
export declare const OrderServiceKey = "OrderService";
export declare const OrderRepositoryKey = "OrderRepository";
export interface OrderController extends BaseController {
}
export interface OrderService extends BaseService {
}
export interface OrderRepository extends BaseRepository<Order> {
}
