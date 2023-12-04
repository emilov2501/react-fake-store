import { injectStores } from "@mobx-devtools/tools";

import { createContainer, asClass, InjectionMode } from "awilix";

import { ServiceBuilder } from "ts-retrofit";
import { ProductApiService } from "../../features/products/data/api/product.api";
import { ProductRepository } from "../../features/products/domain/product.repository";
import { ProductRepositoryImpl } from "../../features/products/data/repository_impl/product.repository_impl";
import { ProductService } from "../../features/products/domain/product.service";
import { ProductStore } from "../../features/products/ui/store/product.store";
import { CategoryApiService } from "../../features/categories/data/api/category.api";
import { CategoryRepository } from "../../features/categories/domain/category.repository";
import { CategoryRepositoryImpl } from "../../features/categories/data/repository_impl/category.repository_impl";
import { CategoryService } from "../../features/categories/domain/category.service";

export const DI = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

DI.register({
  // Adapters
  serviceBuilder: asClass<ServiceBuilder>(ServiceBuilder).singleton(),

  // Api
  productApiService: asClass<ProductApiService>(ProductApiService).singleton(),
  categoryApiService:
    asClass<CategoryApiService>(CategoryApiService).singleton(),

  // Repositories
  productRepository: asClass<ProductRepository>(
    ProductRepositoryImpl
  ).singleton(),

  categoryRepository: asClass<CategoryRepository>(
    CategoryRepositoryImpl
  ).singleton(),

  //
  productService: asClass<ProductService>(ProductService).singleton(),
  categoryService: asClass<CategoryService>(CategoryService).singleton(),

  // Stores
  productStore: asClass<ProductStore>(ProductStore).scoped().proxy(),
});

injectStores({
  productStore: DI.cradle.productStore,
});
