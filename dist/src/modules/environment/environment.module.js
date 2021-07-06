"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const environment_service_1 = require("./environment.service");
let EnvironmentModule = class EnvironmentModule {
};
EnvironmentModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [environment_service_1.EnvironmentService],
        exports: [environment_service_1.EnvironmentService],
    })
], EnvironmentModule);
exports.EnvironmentModule = EnvironmentModule;
//# sourceMappingURL=environment.module.js.map