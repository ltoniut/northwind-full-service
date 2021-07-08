import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { BaseDTO } from 'northwind-rest-commons/dist/shared/dtos/base-dto';
import { Context } from 'northwind-rest-commons/dist/shared/dtos/context';
import { FieldsQuery } from 'northwind-rest-commons/dist/shared/dtos/fields-query';
import { ResponseDTO } from 'northwind-rest-commons/dist/shared/dtos/response.dto';
import { PostProductRequestDTO } from './dtos/product.post.request.dto';
import { PostProductResponseDTO } from './dtos/product.post.resṕonse.dto';
import { ProductService } from './interfaces';
export declare class ProductControllerImpl extends BaseControllerImpl {
    private _service;
    constructor(_service: ProductService);
    createWithCategory(ctx: Context, fields: FieldsQuery, request: {
        product: BaseDTO;
        category?: BaseDTO;
    }): Promise<ResponseDTO<BaseDTO>>;
    createWithCategoryAlt(ctx: Context, request: PostProductRequestDTO): Promise<PostProductResponseDTO>;
}
