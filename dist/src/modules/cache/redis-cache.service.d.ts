import { RedisClient } from 'redis';
import { EnvironmentService } from '../environment/environment.service';
export declare class RedisCache {
    private envService;
    client: RedisClient;
    constructor(envService: EnvironmentService);
    get(key: string): Promise<any>;
    put(key: string, data: any): void;
}
