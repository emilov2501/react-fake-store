import { ProductId, ProductModel } from "./product.model";

export interface ProductRepository {
  getProducts: () => Promise<Array<ProductModel>>;
  getProductById: (id: ProductId) => Promise<ProductModel>;
  getProductsByCategory: (category: string) => Promise<Array<ProductModel>>;
}
