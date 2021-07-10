import { IsString, IsNumber } from "class-validator";

export class PostProductRequestProdDTO {
    @IsString()
    productName: string;

    @IsNumber()
    supplierId: number;
    
    @IsNumber()
    categoryId: number;

    @IsString()
    quantityPerUnit: string;

    @IsNumber()
    unitPrice: number;

    @IsNumber()
    unitsInStock: number;

    @IsNumber()
    unitsOnOrder: number;

    @IsNumber()
    reorderLevel: number;

    @IsNumber()
    discontinued: number;
}