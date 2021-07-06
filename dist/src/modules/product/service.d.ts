import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Product } from 'northwind-rest-commons/dist/models/Product';
import { ProductRepositoryImpl } from './repository';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { Context } from 'northwind-rest-commons/dist/shared/dtos/context';
import { BaseDTO } from 'northwind-rest-commons/dist/shared/dtos/base-dto';
import { FieldsQuery } from 'northwind-rest-commons/dist/shared/dtos/fields-query';
import { ResponseDTO } from 'northwind-rest-commons/dist/shared/dtos/response.dto';
export declare class ProductServiceImpl extends BaseServiceImpl<Product, ProductRepositoryImpl> {
    constructor(repository: ProductRepositoryImpl);
    createProductAndCategory(ctx: Context, fields: FieldsQuery, data: {
        product: Product;
        category: Category;
    }): Promise<ResponseDTO<BaseDTO>>;
}
