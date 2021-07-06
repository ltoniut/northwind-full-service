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
const typeorm_1 = require("@nestjs/typeorm");
const repository_typeorm_1 = require("northwind-rest-commons/dist/shared/baseModules/repository-typeorm");
const Category_1 = require("northwind-rest-commons/dist/typeorm/entities/Category");
const Product_1 = require("northwind-rest-commons/dist/typeorm/entities/Product");
const typeorm_2 = require("northwind-rest-commons/node_modules/typeorm");
let ProductRepositoryImpl = class ProductRepositoryImpl extends repository_typeorm_1.TypeORMRepository {
    constructor(manager) {
        super(Product_1.Product, [], [], manager, {});
    }
    saveProductGroup(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = new Category_1.Category();
            Object.assign(category, { entity });
            const newCategory = yield this.manager.save(Category_1.Category, category);
            return newCategory;
        });
    }
};
ProductRepositoryImpl = __decorate([
    __param(0, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], ProductRepositoryImpl);
exports.ProductRepositoryImpl = ProductRepositoryImpl;
//# sourceMappingURL=repository.js.map