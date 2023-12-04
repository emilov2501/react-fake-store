import React, { useCallback } from "react";
// import { useMutation } from "react-query";
import debounce from "lodash/debounce";
import { useStore } from "../../../../core/hooks/useStore";
import { ProductStore } from "../store/product.store";
import { Form } from "react-bootstrap";

export const ProductSearch: React.FC = () => {
  const { searchProduct } = useStore<ProductStore>("productStore");

  // const mutation = useMutation(searchProduct);

  const debounceMutate = debounce(searchProduct, 500);

  const onChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      debounceMutate(e.target.value);
    },
    []
  );

  return <Form.Control placeholder="Search..." type="text" onChange={onChanged} />;
};
