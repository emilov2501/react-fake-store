import { CategoryRepository } from "./category.repository";

export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getCategories() {
    return this.categoryRepository.getCategories();
  }
}
