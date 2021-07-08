export class PostProductResponseDTO {
  id: number;
  productName: string;
  supplierId: number;
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
