import { AppBar, Scaffold, Text } from "../../core/ui";
import { ProductDetail } from "../../features/products";
import { useNavigate } from "react-router-dom";

export const ProductDetailPage = () => {
  const navigate = useNavigate();

  return (
    <Scaffold
      appBar={
        <AppBar>
          <div onClick={() => navigate(-1)}>
            <Text weight={600}>Go back</Text>
          </div>
        </AppBar>
      }
      body={<ProductDetail />}
    />
  );
};
