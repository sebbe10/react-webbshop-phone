import allProducts from "./products";

import { ShopContext } from "./Shopcontext";
import { useContext } from "react";
import "./products.css";

function TheProducts() {
  const { addToCart } = useContext(ShopContext);

  return (
    <>
      <div className="products">
        {allProducts.map((product, index) => (
          <div className="product" key={index}>
            <div>
              <img src={product.img} alt="" />
            </div>
            <div>
              <p>{product.name}</p>
            </div>
            <div>
              <p>{product.price}</p>
            </div>
            <button className="addToCart" onClick={() => addToCart(product.id)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default TheProducts;
