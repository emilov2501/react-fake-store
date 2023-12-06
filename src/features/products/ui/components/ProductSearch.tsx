import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { Form } from "react-bootstrap";
import { useProductStore } from "../store/product.controller";

export const ProductSearch: React.FC = () => {
  const { searchProduct, query } = useProductStore();
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
