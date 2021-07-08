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
const service_impl_1 = require("northwind-rest-commons/dist/shared/baseModules/service-impl");
const Product_1 = require("northwind-rest-commons/dist/models/Product");
const interfaces_1 = require("./interfaces");
const repository_1 = require("./repository");
const Category_1 = require("northwind-rest-commons/dist/typeorm/entities/Category");
const response_dto_1 = require("northwind-rest-commons/dist/shared/dtos/response.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_post_res_onse_dto_1 = require("./dtos/product.post.res\u1E55onse.dto");
const interfaces_2 = require("../category/interfaces");
const repository_2 = require("../category/repository");
const service_1 = require("../category/service");
let ProductServiceImpl = class ProductServiceImpl extends service_impl_1.BaseServiceImpl {
    constructor(repository, traditionalCategoryRepository, categoryService) {
        super('Product', repository);
        this.traditionalCategoryRepository = traditionalCategoryRepository;
        this.categoryService = categoryService;
    }
    createWithCategory(ctx, fields, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.transaction(ctx, () => __awaiter(this, void 0, void 0, function* () {
                const product = yield this.extendCreatePrepare(ctx, data.product);
                if (!product.categoryId && data.category) {
                    const newCategoryData = yield this.categoryService.extendCreatePrepare(ctx, data.category);
                    const category = yield this.repository.saveProductGroup(newCategoryData);
                    product.categoryId = category.id;
                }
                const entity = yield this.repository.save(ctx, product);
                yield this.extendCreatePostSave(ctx, entity);
                const dto = this.extendCreateResponse(ctx, fields, entity);
                return new response_dto_1.ResponseDTO(dto);
            }));
        });
    }
    createWithCategoryAlt(ctx, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.transaction(ctx, () => __awaiter(this, void 0, void 0, function* () {
                if (!data.product.categoryId && data.category) {
                    const newCategory = new Category_1.Category();
                    Object.assign(newCategory, data.category);
                    const category = yield this.traditionalCategoryRepository.save(newCategory);
                    data.product.categoryId = category.id;
                }
                const newProduct = new Product_1.Product();
                Object.assign(newProduct, data.product);
                yield this.repository.save(ctx, newProduct);
                const dto = new product_post_res_onse_dto_1.PostProductResponseDTO();
                Object.assign(dto, newProduct);
                return dto;
            }));
        });
    }
};
ProductServiceImpl = __decorate([
    __param(0, common_1.Inject(interfaces_1.ProductRepositoryKey)),
    __param(1, typeorm_1.InjectRepository(Category_1.Category)),
    __param(2, common_1.Inject(interfaces_2.CategoryServiceKey)),
    __metadata("design:paramtypes", [repository_1.ProductRepositoryImpl,
        typeorm_2.Repository,
        service_1.CategoryServiceImpl])
], ProductServiceImpl);
exports.ProductServiceImpl = ProductServiceImpl;
//# sourceMappingURL=service.js.map