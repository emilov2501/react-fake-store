import { ProductModel } from "./product.model";

export interface ProductRepository {
  getProducts: () => Promise<Array<ProductModel>>;
}
