import { Serializable, jsonName, jsonProperty } from "ts-serializable";

export class CategoryModel extends Serializable {
  @jsonProperty(String)
  @jsonName("title")
  title!: string;
}
