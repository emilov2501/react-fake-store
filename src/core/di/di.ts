import { injectStores } from "@mobx-devtools/tools";

import { createContainer, asClass, InjectionMode } from "awilix";

import { ServiceBuilder } from "ts-retrofit";
import { ProductApiService } from "../../features/products/data/api/product.api";
import { ProductRepository } from "../../features/products/domain/product.repository";
import { ProductRepositoryImpl } from "../../features/products/data/repository_impl/product.repository_impl";
import { ProductService } from "../../features/products/domain/product.service";
import { ProductStore } from "../../features/products/ui/store/product.store";

export const DI = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

DI.register({
  // Adapters
  serviceBuilder: asClass<ServiceBuilder>(ServiceBuilder).singleton(),

  // Api
  productApiService: asClass<ProductApiService>(ProductApiService).singleton(),

  // Repositories
  productRepository: asClass<ProductRepository>(
    ProductRepositoryImpl
  ).singleton(),

  //
  productService: asClass<ProductService>(ProductService).singleton(),

  // Stores
  productStore: asClass<ProductStore>(ProductStore).scoped().proxy(),
});

injectStores({
  productStore: DI.cradle.productStore,
});
