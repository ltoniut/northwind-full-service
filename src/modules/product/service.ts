// eslint-disable-next-line no-unused-vars
import { Inject } from '@nestjs/common';
import { BaseServiceImpl } from 'northwind-rest-commons/dist/shared/baseModules/service-impl';
import { Product } from 'northwind-rest-commons/dist/models/Product';
import { ProductRepository, ProductRepositoryKey } from './interfaces';
import { ProductRepositoryImpl } from './repository';
import { Category } from 'northwind-rest-commons/dist/typeorm/entities/Category';
import { Context } from 'northwind-rest-commons/dist/shared/dtos/context';
import { BaseDTO } from 'northwind-rest-commons/dist/shared/dtos/base-dto';
import { FieldsQuery } from 'northwind-rest-commons/dist/shared/dtos/fields-query';
import { ResponseDTO } from 'northwind-rest-commons/dist/shared/dtos/response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostProductRequestDTO } from './dtos/product.post.request.dto';
import { Repository } from 'typeorm';
import { PostProduceResponseDTO } from './dtos/product.post.resṕonse.dto';

export class ProductServiceImpl extends BaseServiceImpl<Product, ProductRepositoryImpl> {
  constructor(
    @Inject(ProductRepositoryKey)
    repository: ProductRepositoryImpl,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
    super('Product', repository);
  }

  async createWithCategory(ctx: Context, fields: FieldsQuery, data: {product: Product, category?: Category}) {
    return this.repository.transaction(ctx, async () => {
      if (!data.product.categoryId && data.category) {
        const category = await this.repository.saveProductGroup(data.category);
        const product = data.product;
        product.categoryId = data.category.id;
      }
      const entity = await this.repository.save(ctx, data.product);
      await this.extendCreatePostSave(ctx, entity);
      const dto = this.extendCreateResponse(ctx, fields, entity);
      return new ResponseDTO((dto as unknown) as BaseDTO);
    });
  }

  async createWithCategoryAlt(ctx: Context, data: {dto: PostProductRequestDTO}) : Promise<PostProduceResponseDTO> {
    return this.repository.transaction(ctx, async () => {
      if (!data.dto.categoryId && data.dto.category) {
        const category = await this.categoryRepository.save(data.dto.category);
        data.dto.categoryId = category.id;
      }
      const product : Product = new Product();
      Object.assign(product, data.dto);
      const entity = await this.productRepository.save(product);
      const dto = new PostProduceResponseDTO();
      Object.assign(dto, product);

      return dto;
    });
  }
}
