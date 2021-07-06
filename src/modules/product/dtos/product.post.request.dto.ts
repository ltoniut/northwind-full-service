export class PostProductRequestDTO {
  productName: string;
  customerId: number;
  categoryId?: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: number;
  category?: {
    categoryName: string;
    description: string;
    picture: string;
  }
}
