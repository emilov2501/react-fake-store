import { ProductId, ProductModel } from "./product.model";
import { ProductRepository } from "./product.repository";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProducts(): Promise<ProductModel[]> {
    return await this.productRepository.getProducts();
  }

  async getProductById(id: ProductId): Promise<ProductModel> {
    return await this.productRepository.getProductById(id);
  }

  async getProductsByCategory(category: string): Promise<ProductModel[]> {
    return await this.productRepository.getProductsByCategory(category);
  }
}
