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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const controller_impl_1 = require("northwind-rest-commons/dist/shared/baseModules/controller-impl");
const interfaces_1 = require("./interfaces");
const controllerPath = 'customer';
let CustomerControllerImpl = class CustomerControllerImpl extends controller_impl_1.BaseControllerImpl {
    constructor(service) {
        super(service, controllerPath);
    }
};
CustomerControllerImpl = __decorate([
    swagger_1.ApiTags(controllerPath),
    common_1.Controller(controllerPath),
    __param(0, common_1.Inject(interfaces_1.CustomerServiceKey)),
    __metadata("design:paramtypes", [Object])
], CustomerControllerImpl);
exports.CustomerControllerImpl = CustomerControllerImpl;
//# sourceMappingURL=controller.js.map