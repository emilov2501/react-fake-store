import { makeObservable, observable, runInAction } from "mobx";
import { ProductModel } from "../../domain/product.model";
import { ProductService } from "../../domain/product.service";

export class ProductStore {
  constructor(private readonly di: { productService: ProductService }) {
    makeObservable(this, {
      products: observable,
    });
  }

  products: ProductModel[] = [];

  async getProducts() {
    const products = await this.di.productService.getProducts();
    runInAction(() => {
      this.products = products;
    });
  }
}
