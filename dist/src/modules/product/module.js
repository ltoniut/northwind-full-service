"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const interfaces_1 = require("../category/interfaces");
const repository_1 = require("../category/repository");
const service_1 = require("../category/service");
const Product_1 = require("northwind-rest-commons/dist/typeorm/entities/Product");
const Category_1 = require("northwind-rest-commons/dist/typeorm/entities/Category");
const controller_1 = require("./controller");
const interfaces_2 = require("./interfaces");
const repository_2 = require("./repository");
const service_2 = require("./service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    common_1.Module({
        controllers: [controller_1.ProductControllerImpl],
        imports: [typeorm_1.TypeOrmModule.forFeature([Category_1.Category, Product_1.Product])],
        providers: [
            {
                provide: interfaces_2.ProductRepositoryKey,
                useClass: repository_2.ProductRepositoryImpl,
            },
            {
                provide: interfaces_2.ProductServiceKey,
                useClass: service_2.ProductServiceImpl,
            },
            {
                provide: interfaces_1.CategoryServiceKey,
                useClass: service_1.CategoryServiceImpl,
            }
        ],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=module.js.map