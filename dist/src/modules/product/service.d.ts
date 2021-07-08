import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Product } from 'northwind-rest-commons/dist/models/Product';
import { ProductRepositoryImpl } from './repository';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { Context } from 'northwind-rest-commons/dist/shared/dtos/context';
import { BaseDTO } from 'northwind-rest-commons/dist/shared/dtos/base-dto';
import { FieldsQuery } from 'northwind-rest-commons/dist/shared/dtos/fields-query';
import { ResponseDTO } from 'northwind-rest-commons/dist/shared/dtos/response.dto';
import { PostProductRequestDTO } from './dtos/product.post.request.dto';
import { Repository } from 'typeorm';
import { PostProductResponseDTO } from './dtos/product.post.resṕonse.dto';
import { CategoryServiceImpl } from 'modules/category/service';
export declare class ProductServiceImpl extends BaseServiceImpl<Product, ProductRepositoryImpl> {
    private traditionalCategoryRepository;
    private categoryService;
    constructor(repository: ProductRepositoryImpl, traditionalCategoryRepository: Repository<Category>, categoryService: CategoryServiceImpl);
    createWithCategory(ctx: Context, fields: FieldsQuery, data: {
        product: BaseDTO;
        category?: BaseDTO;
    }): Promise<ResponseDTO<BaseDTO>>;
    createWithCategoryAlt(ctx: Context, data: PostProductRequestDTO): Promise<PostProductResponseDTO>;
}
