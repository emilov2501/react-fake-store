import axios from "axios";
import { ProductId, ProductModel } from "./product.model";
export class ProductRepository {
  async getProducts(): Promise<ProductModel[]> {
    try {
      const response = await axios.get<ProductModel[]>("/api/products");
      return response.data.map((product) => ProductModel.fromJSON(product));
    } catch (e) {
      throw new Error(`GET_PRODUCTS: ${e}`);
    }
  }

  async getProductById(id: ProductId): Promise<ProductModel> {
    try {
      const response = await axios.get<ProductModel>(`/api/products/${id}`);
      return ProductModel.fromJSON(response.data);
    } catch (e) {
      throw new Error(`GET_PRODUCTS: ${e}`);
    }
  }

  async getProductsByCategory(category: string): Promise<ProductModel[]> {
    try {
      const response = await axios.get<ProductModel[]>(
        `/api/products/category/${category}`
      );
      return response.data.map((product) => ProductModel.fromJSON(product));
    } catch (e) {
      throw new Error(`GET_PRODUCTS_BY_CATEGORY: ${e}`);
    }
  }
}
