import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Employee } from 'northwind-rest-commons/dist/models/Employee';
import { EmployeeRepository } from './interfaces';
export declare class EmployeeServiceImpl extends BaseServiceImpl<Employee, EmployeeRepository> {
    constructor(repository: EmployeeRepository);
}
