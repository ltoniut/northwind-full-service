import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentData } from './interfaces/environment-data.interface';
export declare class EnvironmentService {
    private envs;
    constructor();
    getEnvs(): EnvironmentData;
    getTypeORMEnvs(): TypeOrmModuleOptions;
    isDevelopment(): boolean;
    isProduction(): boolean;
}
