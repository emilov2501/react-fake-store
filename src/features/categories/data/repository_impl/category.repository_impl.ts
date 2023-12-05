import { CategoryModel } from "../../domain/category.model";
import { CategoryRepository } from "../../domain/category.repository";
import { CategoryApiService } from "../api/category.api";

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(private readonly categoryApiService: CategoryApiService) {}

  async getCategories(): Promise<CategoryModel[]> {
    try {
      const response = await this.categoryApiService.getCategories();
      return response.data.map((cat) => CategoryModel.fromJSON({ title: cat }));
    } catch (e) {
      throw new Error(`GET_CATEGORIES: ${e}`);
    }
  }
}
