import { makeObservable, observable, runInAction } from "mobx";
import { ProductId, ProductModel } from "../../domain/product.model";
import { ProductService } from "../../domain/product.service";
import { DataStatus } from "../../../../core/constants/status";
import { AsyncDataStatus } from "../../../../core/helpers/asyncDataStatus/AsyncDataStatus";
export class ProductStore extends AsyncDataStatus {
  constructor(private readonly di: { productService: ProductService }) {
    super();
    makeObservable(this, {
      status: observable,
      query: observable,
      products: observable,
      product: observable,
    });
  }

  products: ProductModel[] = [];
  product: ProductModel | null = null;
  query: string = "";

  getProducts = async () => {
    runInAction(() => (this.status = DataStatus.loading));
    try {
      const products = await this.di.productService.getProducts();
      runInAction(() => {
        this.products = products;
        this.status = DataStatus.success;
      });
    } catch (e) {
      runInAction(() => (this.status = DataStatus.failure));
    }
  };

  getProductById = async (id: ProductId) => {
    runInAction(() => (this.status = DataStatus.loading));
    try {
      const product = await this.di.productService.getProductById(id);
      runInAction(() => {
        this.product = product;
        this.status = DataStatus.success;
      });
    } catch (e) {
      runInAction(() => (this.status = DataStatus.failure));
    }
  };

  getProductsByCategory = async ({ category }: { category: string }) => {
    runInAction(() => (this.status = DataStatus.loading));
    try {
      const products = await this.di.productService.getProductsByCategory(
        category
      );
      runInAction(() => {
        this.products = products;
        this.status = DataStatus.success;
      });
    } catch (e) {
      runInAction(() => (this.status = DataStatus.failure));
    }
  };

  searchProduct = (query: string) => {
    runInAction(() => (this.query = query));
  };
}
