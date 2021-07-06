"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
let EnvironmentService = class EnvironmentService {
    constructor() {
        const environment = process.env.NODE_ENV || 'development';
        let data = {};
        try {
            if (environment === 'development') {
                data = Object.assign(Object.assign({}, dotenv.parse(fs.readFileSync('.env'))), process.env);
            }
            else {
                data = Object.assign(Object.assign({}, data), process.env);
            }
        }
        catch (e) {
            console.warn(e);
        }
        data.APP_ENV = environment;
        data.APP_DEBUG = data.APP_DEBUG === 'true';
        data.RDS_PORT = parseInt(data.RDS_PORT, 10);
        this.envs = data;
    }
    getEnvs() {
        return this.envs;
    }
    getTypeORMEnvs() {
        const typeOrmFolder = path.resolve(`${__dirname}/../../../../node_modules/northwind-rest-commons/dist/typeorm`);
        return {
            type: this.envs.RDS_TYPE,
            host: this.envs.RDS_HOSTNAME,
            port: this.envs.RDS_PORT,
            username: this.envs.RDS_USERNAME,
            password: this.envs.RDS_PASSWORD,
            database: this.envs.RDS_DB_NAME,
            synchronize: false,
            entities: [
                `${typeOrmFolder}/entities/*.{js,ts}`,
                `${typeOrmFolder}/view-entities/*.{js,ts}`,
                `${typeOrmFolder}/domain-entities/*.{js,ts}`,
            ],
            subscribers: [`${__dirname}/../**.module/*-subscriber.{js,ts}`],
            migrations: [`${__dirname}/../migrations/*.{js,ts}`],
            options: {
                encrypt: true,
                enableArithAbort: true,
            },
            logging: this.envs.APP_DEBUG,
        };
    }
    isDevelopment() {
        return this.envs.APP_ENV === 'development';
    }
    isProduction() {
        return this.envs.APP_ENV === 'production';
    }
};
EnvironmentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], EnvironmentService);
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=environment.service.js.map