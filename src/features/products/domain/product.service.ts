import { ProductModel } from "./product.model";
import { ProductRepository } from "./product.repository";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProducts(): Promise<ProductModel[]> {
    return await this.productRepository.getProducts();
  }
}
