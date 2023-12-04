import { AxiosError } from "axios";
import { ProductModel } from "../../domain/product.model";
import { ProductRepository } from "../../domain/product.repository";
import { ProductApiService } from "../api/product.api";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly productApiService: ProductApiService) {}

  async getProducts(): Promise<ProductModel[]> {
    try {
      const response = await this.productApiService.getProducts();
      return response.data.map((product) => ProductModel.fromJSON(product));
    } catch (e) {
      throw new AxiosError(`GET_PRODUCTS: ${e}`);
    }
  }

  async getProductsByCategory(category: string): Promise<ProductModel[]> {
    try {
      const response = await this.productApiService.getProductsByCategory(
        category
      );
      return response.data.map((product) => ProductModel.fromJSON(product));
    } catch (e) {
      throw new AxiosError(`GET_PRODUCTS_BY_CATEGORY: ${e}`);
    }
  }
}
