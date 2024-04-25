import allProducts from "./products";

import { ShopContext } from "./Shopcontext";
import { useContext } from "react";
import "./products.css";
import { Link } from "react-router-dom";

function TheProducts() {
  const { addToCart } = useContext(ShopContext);

  return (
    <>
      <div className="products">
        {allProducts.map((product, index) => (
          <div className="product" key={index}>
            <div>
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt="" />
              </Link>
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
