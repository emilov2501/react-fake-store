import axios from "axios";
import { CategoryModel } from "./category.model";

export class CategoryRepository {
  async getCategories(): Promise<CategoryModel[]> {
    try {
      const response = await axios.get<CategoryModel[]>(
        "/api/products/categories"
      );

      return response.data.map((cat) => CategoryModel.fromJSON({ title: cat }));
    } catch (e) {
      throw new Error(`GET_CATEGORIES: ${e}`);
    }
  }
}
