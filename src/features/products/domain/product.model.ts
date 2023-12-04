import { Serializable, jsonProperty } from "ts-serializable";

export class RatingModel extends Serializable {
  @jsonProperty(Number)
  rate!: number;

  @jsonProperty(Number)
  count!: number;
}

export class ProductModel extends Serializable {
  @jsonProperty(RatingModel)
  rating!: RatingModel;

  @jsonProperty(Number)
  id!: number;

  @jsonProperty(String)
  title!: string;

  @jsonProperty(String)
  image!: string;

  @jsonProperty(Number)
  price!: string;
}
