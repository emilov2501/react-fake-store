/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Response } from "ts-retrofit";
import { BaseService, BasePath, GET } from "ts-retrofit";
import { FAKE_STORE_BASE_URL } from "../../../../core/constants/constants";
import { CategoryModel } from "../../domain/category.model";

@BasePath(FAKE_STORE_BASE_URL)
export class CategoryApiService extends BaseService {
  @GET("/products/categories")
  getCategories(): Response<CategoryModel[]> {
    return {} as Response<CategoryModel[]>;
  }
}
