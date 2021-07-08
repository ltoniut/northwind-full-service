export class PostProductRequestDTO {
  product: {
    productName: string;
    supplierId: number;
    categoryId: number;
    quantityPerUnit: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    reorderLevel: number;
    discontinued: number;
  }
  category?: {
    categoryName: string;
    description: string;
    picture: string;
  }
}
