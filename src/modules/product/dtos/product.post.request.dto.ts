import { Expose, Transform } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { PostProductRequestCategoryDTO } from './product.post.request.category.dto';
import { PostProductRequestProdDTO } from './product.post.request.prod.dto';


export class PostProductRequestDTO {
  @Expose()
  @IsObject()
  product: PostProductRequestProdDTO;

  @Expose()
  @IsObject()
  @IsOptional()
  category?: PostProductRequestCategoryDTO;
}
