import { Body, Controller, Inject, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { BaseDTO } from 'northwind-rest-commons/dist/shared/dtos/base-dto';
import { Context } from 'northwind-rest-commons/dist/shared/dtos/context';
import { FieldsQuery } from 'northwind-rest-commons/dist/shared/dtos/fields-query';
import { ResponseDTO } from 'northwind-rest-commons/dist/shared/dtos/response.dto';
import { PostProductRequestDTO } from './dtos/product.post.request.dto';
import { PostProductResponseDTO } from './dtos/product.post.resṕonse.dto';
import { ProductService, ProductServiceKey } from './interfaces';
import { UserContext } from 'northwind-rest-commons/dist/decorators/User.decorator';

const controllerPath =  'product';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class ProductControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(ProductServiceKey)
    private _service: ProductService,
  ) {
    super(_service, controllerPath);
  }

  @Post('/')
  async createWithCategory(
    @UserContext()
    ctx: Context,
    @Query(ValidationPipe)
    fields: FieldsQuery,
    @Body()
    request: { product: BaseDTO, category?: BaseDTO }
  ) : Promise<ResponseDTO<BaseDTO>> {
    console.log(request);
    return await this._service.createWithCategory(ctx, fields, request);
  }

  @Post('/alt')
  async createWithCategoryAlt(
    @UserContext()
    ctx: Context,
    @Body()
    request: PostProductRequestDTO
  ) : Promise<PostProductResponseDTO> {
    return await this._service.createWithCategoryAlt(ctx, request);
  }
}