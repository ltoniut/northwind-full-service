"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const redisStore = require("cache-manager-redis-store");
const nestjs_i18n_1 = require("nestjs-i18n");
const environment_module_1 = require("./modules/environment/environment.module");
const environment_service_1 = require("./modules/environment/environment.service");
const model_builders_1 = require("northwind-rest-commons/dist/schemas/model-builders");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const module_1 = require("./modules/category/module");
const module_2 = require("./modules/customer/module");
const module_3 = require("./modules/employee/module");
const module_4 = require("./modules/order/module");
const module_5 = require("./modules/order-details/module");
const module_6 = require("./modules/product/module");
const module_7 = require("./modules/shipper/module");
const module_8 = require("./modules/supplier/module");
const cacheImports = [];
model_builders_1.loadSchemas();
if (process.env.ENABLE_CACHE) {
    cacheImports.push(common_1.CacheModule.registerAsync({
        imports: [environment_module_1.EnvironmentModule],
        useFactory: (environmentService) => __awaiter(void 0, void 0, void 0, function* () {
            const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, } = environmentService.getEnvs();
            return {
                store: redisStore,
                host: REDIS_HOST,
                port: REDIS_PORT,
                ttl: 10,
                password: REDIS_PASSWORD,
            };
        }),
        inject: [environment_service_1.EnvironmentService],
    }));
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            ...cacheImports,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [environment_module_1.EnvironmentModule],
                useFactory: (environmentService) => __awaiter(void 0, void 0, void 0, function* () { return environmentService.getTypeORMEnvs(); }),
                inject: [environment_service_1.EnvironmentService],
            }),
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                parser: nestjs_i18n_1.I18nJsonParser,
                parserOptions: {
                    path: `${__dirname}/i18n/`,
                    watch: true,
                },
                resolvers: [new nestjs_i18n_1.HeaderResolver(['lang'])],
            }),
            module_1.CategoryModule,
            module_2.CustomerModule,
            module_3.EmployeeModule,
            module_4.OrderModule,
            module_5.OrderDetailsModule,
            module_6.ProductModule,
            module_7.ShipperModule,
            module_8.SupplierModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map