import { BaseController } from 'northwind-rest-commons/dist/shared/baseModules/controller';
import { BaseService } from 'northwind-rest-commons/dist/shared/baseModules/service';
import { BaseRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository';
import { Employee } from 'northwind-rest-commons/dist/typeorm/entities/Employee';
export declare const EmployeeControllerKey = "EmployeeController";
export declare const EmployeeServiceKey = "EmployeeService";
export declare const EmployeeRepositoryKey = "EmployeeRepository";
export interface EmployeeController extends BaseController {
}
export interface EmployeeService extends BaseService {
}
export interface EmployeeRepository extends BaseRepository<Employee> {
}
