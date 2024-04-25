import { useContext } from "react";
import allProducts from "./products";
import { useParams } from "react-router-dom";
import ShopContext from "./Shopcontext";

import "./singlepage.css";

function ProductDisplay() {
  const { addToCart } = useContext(ShopContext);

  const { productId } = useParams();

  const product = allProducts.find(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      {/* <h1>Product display</h1> */}
      <div className="singlepage">
        <div className="singleProduct">
          <h1>{product.name}</h1>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>{product.name}</div>

          <div>
            <p>{product.price} kr</p>
          </div>
          <div>
            <button onClick={() => addToCart(product.id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
