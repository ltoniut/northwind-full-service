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
const swagger_1 = require("@nestjs/swagger");
const controller_impl_1 = require("northwind-rest-commons/dist/shared/baseModules/controller-impl");
const context_1 = require("northwind-rest-commons/dist/shared/dtos/context");
const fields_query_1 = require("northwind-rest-commons/dist/shared/dtos/fields-query");
const product_post_request_dto_1 = require("./dtos/product.post.request.dto");
const interfaces_1 = require("./interfaces");
const User_decorator_1 = require("northwind-rest-commons/dist/decorators/User.decorator");
const controllerPath = 'product';
let ProductControllerImpl = class ProductControllerImpl extends controller_impl_1.BaseControllerImpl {
    constructor(_service) {
        super(_service, controllerPath);
        this._service = _service;
    }
    createWithCategory(ctx, fields, request) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(request);
            return yield this._service.createWithCategory(ctx, fields, request);
        });
    }
    createWithCategoryAlt(ctx, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._service.createWithCategoryAlt(ctx, request);
        });
    }
};
__decorate([
    common_1.Post('/'),
    __param(0, User_decorator_1.UserContext()),
    __param(1, common_1.Query(common_1.ValidationPipe)),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [context_1.Context,
        fields_query_1.FieldsQuery, Object]),
    __metadata("design:returntype", Promise)
], ProductControllerImpl.prototype, "createWithCategory", null);
__decorate([
    common_1.Post('/alt'),
    __param(0, User_decorator_1.UserContext()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [context_1.Context,
        product_post_request_dto_1.PostProductRequestDTO]),
    __metadata("design:returntype", Promise)
], ProductControllerImpl.prototype, "createWithCategoryAlt", null);
ProductControllerImpl = __decorate([
    swagger_1.ApiTags(controllerPath),
    common_1.Controller(controllerPath),
    __param(0, common_1.Inject(interfaces_1.ProductServiceKey)),
    __metadata("design:paramtypes", [Object])
], ProductControllerImpl);
exports.ProductControllerImpl = ProductControllerImpl;
//# sourceMappingURL=controller.js.map