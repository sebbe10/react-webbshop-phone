import allProducts from "./products";
import { useParams } from "react-router-dom";

function ProductDisplay() {
  const { productId } = useParams();

  const product = allProducts.find(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      <h1>Product display</h1>

      <img src={product.img} alt="" />
      {product.name}
    </>
  );
}

export default ProductDisplay;
