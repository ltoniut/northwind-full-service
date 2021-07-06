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
const redis = require("redis");
const environment_service_1 = require("../environment/environment.service");
let RedisCache = class RedisCache {
    constructor(envService) {
        this.envService = envService;
        const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, } = this.envService.getEnvs();
        this.client = redis.createClient({
            host: REDIS_HOST,
            port: REDIS_PORT,
            password: REDIS_PASSWORD,
        });
    }
    get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, reply) => {
                if (err) {
                    reject(err);
                }
                if (reply) {
                    resolve(JSON.parse(reply));
                }
            });
        });
    }
    put(key, data) {
        this.client.set(key, JSON.stringify(data));
    }
};
RedisCache = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], RedisCache);
exports.RedisCache = RedisCache;
//# sourceMappingURL=redis-cache.service.js.map