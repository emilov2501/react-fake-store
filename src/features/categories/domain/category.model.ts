import { Serializable, jsonProperty } from "ts-serializable";

export class CategoryModel extends Serializable {
  @jsonProperty(String)
  title!: string;
}
