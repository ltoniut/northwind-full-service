import { IsString } from "class-validator";

export class PostProductRequestCategoryDTO {
  @IsString()
  categoryName: string;

  @IsString()
  description: string;

  @IsString()
  picture: string;
}