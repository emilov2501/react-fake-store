import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { useStore } from "../../../../core/hooks/useStore";
import { ProductStore } from "../store/product.store";
import { Form } from "react-bootstrap";

export const ProductSearch: React.FC = () => {
  const { searchProduct, query } = useStore<ProductStore>("productStore");
  const [value, setValue] = useState(() => query);

  const debounceMutate = debounce(searchProduct, 200);

  const onChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
      debounceMutate(e.target.value);
    },
    []
  );

  return (
    <Form.Control
      placeholder="Search..."
      type="text"
      onChange={onChanged}
      value={value}
    />
  );
};
