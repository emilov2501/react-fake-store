import { CategoryRepository } from "./category.repository";

export class CategoryService {
  categoryRepository: CategoryRepository = new CategoryRepository();

  async getCategories() {
    return this.categoryRepository.getCategories();
  }
}
