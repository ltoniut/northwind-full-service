import { TypeORMRepository } from 'northwind-rest-commons/dist/shared/baseModules/repository-typeorm';
import { Employee } from 'northwind-rest-commons/dist/typeorm/entities/Employee';
import { EntityManager } from 'northwind-rest-commons/node_modules/typeorm';
export declare class EmployeeRepositoryImpl extends TypeORMRepository<Employee> {
    constructor(manager: EntityManager);
}
