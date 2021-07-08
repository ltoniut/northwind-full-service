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
import { PostProductResponseDTO } from './dtos/product.post.resṕonse.dto';
import { CategoryRepositoryKey, CategoryServiceKey } from 'modules/category/interfaces';
import { CategoryRepositoryImpl } from 'modules/category/repository';
import { CategoryServiceImpl } from 'modules/category/service';

export class ProductServiceImpl extends BaseServiceImpl<Product, ProductRepositoryImpl> {
  constructor(
    @Inject(ProductRepositoryKey)
    repository: ProductRepositoryImpl,
    @InjectRepository(Category)
    private traditionalCategoryRepository: Repository<Category>,
    @Inject(CategoryServiceKey)
    private categoryService: CategoryServiceImpl
  ) {
    super('Product', repository);
  }

  async createWithCategory(ctx: Context, fields: FieldsQuery, data: {product: BaseDTO, category?: BaseDTO}) {
    return this.repository.transaction(ctx, async () => {
      const product = await this.extendCreatePrepare(ctx, data.product);

      if (!product.categoryId && data.category) {
        const newCategoryData = await this.categoryService.extendCreatePrepare(ctx, data.category);
        const category = await this.repository.saveProductGroup(newCategoryData);
        product.categoryId = category.id;
      }

      const entity = await this.repository.save(ctx, product);
      await this.extendCreatePostSave(ctx, entity);
      const dto = this.extendCreateResponse(ctx, fields, entity);
      return new ResponseDTO((dto as unknown) as BaseDTO);
    });
  }

  async createWithCategoryAlt(ctx: Context, data: PostProductRequestDTO) : Promise<PostProductResponseDTO> {
    return this.repository.transaction(ctx, async () => {
      if (!data.product.categoryId && data.category) {
        const newCategory : Category = new Category();
        Object.assign(newCategory, data.category);
        const category = await this.traditionalCategoryRepository.save(newCategory);
        data.product.categoryId = category.id;
      }

      const newProduct : Product = new Product();
      Object.assign(newProduct, data.product);
      await this.repository.save(ctx, newProduct);
      const dto = new PostProductResponseDTO();
      Object.assign(dto, newProduct);

      return dto;
    });
  }
}
