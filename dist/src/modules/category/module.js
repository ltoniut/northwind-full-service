"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const controller_1 = require("./controller");
const interfaces_1 = require("./interfaces");
const repository_1 = require("./repository");
const service_1 = require("./service");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    common_1.Module({
        controllers: [controller_1.CategoryControllerImpl],
        providers: [
            {
                provide: interfaces_1.CategoryRepositoryKey,
                useClass: repository_1.CategoryRepositoryImpl,
            },
            {
                provide: interfaces_1.CategoryServiceKey,
                useClass: service_1.CategoryServiceImpl,
            },
        ],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=module.js.map