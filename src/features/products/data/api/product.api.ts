/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Response } from "ts-retrofit";
import { BaseService, BasePath, GET } from "ts-retrofit";
import { FAKE_STORE_BASE_URL } from "../../../../core/constants/constants";
import { ProductModel } from "../../domain/product.model";

@BasePath(FAKE_STORE_BASE_URL)
export class ProductApiService extends BaseService {
  @GET("/products")
  getProducts(): Response<ProductModel[]> {
    return {} as Response<ProductModel[]>;
  }
}
