import { Controller, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { BaseDTO } from 'northwind-rest-commons/dist/shared/dtos/base-dto';
import { Context } from 'northwind-rest-commons/dist/shared/dtos/context';
import { FieldsQuery } from 'northwind-rest-commons/dist/shared/dtos/fields-query';
import { PostProductRequestDTO } from './dtos/product.post.request.dto';
import { PostProduceResponseDTO } from './dtos/product.post.resṕonse.dto';
import { ProductService, ProductServiceKey } from './interfaces';

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
  async createAlt(
    ctx: Context,
    fields: FieldsQuery,
    dto: PostProductRequestDTO
  ) : Promise<PostProduceResponseDTO> {
    return await this._service.createWithCategoryAlt(ctx, { dto });
  }
}