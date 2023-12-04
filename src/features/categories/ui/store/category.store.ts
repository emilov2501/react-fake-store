import { makeObservable, observable, runInAction } from "mobx";
import { AsyncDataStatus } from "../../../../core/helpers/asyncDataStatus/AsyncDataStatus";
import { CategoryService } from "../../domain/category.service";
import { CategoryModel } from "../../domain/category.model";
import { DataStatus } from "../../../../core/constants/status";

export class CategoryStore extends AsyncDataStatus {
  constructor(private readonly di: { categoryService: CategoryService }) {
    super();
    makeObservable(this, {
      categories: observable,
    });
  }

  categories: CategoryModel[] = [];

  getCategories = async () => {
    runInAction(() => (this.status = DataStatus.loading));
    try {
      const response = await this.di.categoryService.getCategories();
      runInAction(() => {
        this.categories = response;
        this.status = DataStatus.success;
      });
    } catch (e) {
      runInAction(() => (this.status = DataStatus.failure));
    }
  };
}
