import { CategoryModel } from "./category.model";

export interface CategoryRepository {
  getCategories: () => Promise<Array<CategoryModel>>;
}
