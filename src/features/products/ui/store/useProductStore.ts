import { create } from "zustand";
import { ProductService } from "../../domain/product.service";
import { ProductId, ProductModel } from "../../domain/product.model";
import { DataStatus } from "../../../../core/constants/status";

interface ProductStore {
  products: ProductModel[];
  product: ProductModel | null;
  query: string;
  status: DataStatus;

  getProductsByCategory: (cat: string) => Promise<void>;
  getProductById: (id: ProductId) => Promise<void>;
  searchProduct: (query: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  status: DataStatus.initial,
  products: [],
  product: null,
  query: "",

  getProductById: async (id: ProductId) => {
    set({ status: DataStatus.loading });
    try {
      const service = new ProductService();
      const response = await service.getProductById(id);
      set({ product: response, status: DataStatus.success });
    } catch (e) {
      set({ status: DataStatus.failure });
    }
  },

  getProductsByCategory: async (category: string) => {
    set({ status: DataStatus.loading });
    try {
      const service = new ProductService();
      const response = await service.getProductsByCategory(category);
      set({ products: response, status: DataStatus.success });
    } catch (e) {
      set({ status: DataStatus.failure });
    }
  },

  searchProduct: (query: string) => {
    set({ query: query });
  },
}));
