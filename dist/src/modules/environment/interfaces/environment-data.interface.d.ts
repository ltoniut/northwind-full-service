export interface EnvironmentData {
    RDS_TYPE: 'postgres' | 'mysql' | 'mssql';
    RDS_HOSTNAME: string;
    RDS_DB_NAME: string;
    RDS_PORT: number;
    RDS_USERNAME: string;
    RDS_PASSWORD: string;
    APP_ENV?: string;
    APP_DEBUG?: boolean;
    GLOBAL_ROUTES_PREFIX: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_PASSWORD?: string;
}
