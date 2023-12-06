import { create } from "zustand";
import { CategoryService } from "../../domain/category.service";
import { DataStatus } from "../../../../core/constants/status";
import { CategoryModel } from "../../domain/category.model";

interface CategoryStore {
  categories: CategoryModel[];
  status: DataStatus;

  getCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  status: DataStatus.initial,
  categories: [],
  getCategories: async () => {
    set({ status: DataStatus.loading });
    try {
      const service = new CategoryService();
      const response = await service.getCategories();
      set({ categories: response, status: DataStatus.success });
    } catch (e) {
      set({ status: DataStatus.failure });
    }
  },
}));
