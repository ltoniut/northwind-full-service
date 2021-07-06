export class PostProduceResponseDTO {
  id: number;
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
    id: number;
    categoryName: string;
    description: string;
    picture: string;
  }
}
