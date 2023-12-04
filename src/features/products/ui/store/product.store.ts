import { makeObservable, observable, runInAction } from "mobx";
import { ProductModel } from "../../domain/product.model";
import { ProductService } from "../../domain/product.service";
import { DataStatus } from "../../../../core/constants/status";
import { AsyncDataStatus } from "../../../../core/helpers/asyncDataStatus/AsyncDataStatus";
export class ProductStore extends AsyncDataStatus {
  constructor(private readonly di: { productService: ProductService }) {
    super();
    makeObservable(this, {
      status: observable,
      products: observable,
    });
  }

  products: ProductModel[] = [];

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
}
