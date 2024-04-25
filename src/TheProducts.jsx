import allProducts from "./products";

import { ShopContext } from "./Shopcontext";
import { useContext, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";

function TheProducts() {
  const { addToCart } = useContext(ShopContext);

  const [sortedProducts, setSortedProducts] = useState(allProducts);

  function standard() {
    const sorted = [...allProducts];
    setSortedProducts(sorted);
  }

  function lowToHigh() {
    const sorted = [...allProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  }

  function highToLow() {
    const sorted = [...allProducts].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
  }
  return (
    <>
      <div className="theShop">
        <select
          className="theSelect"
          onChange={(e) => {
            if (e.target.value === "standard") {
              standard();
            } else if (e.target.value === "lowToHigh") {
              lowToHigh();
            } else if (e.target.value === "highToLow") {
              highToLow();
            }
          }}>
          <option value="standard">Standard</option>
          <option value="lowToHigh">Lågt till högt</option>
          <option value="highToLow">Högt till lågt</option>
        </select>

        <div className="products">
          {sortedProducts.map((product, index) => (
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
                <p>{product.price} kr</p>
              </div>
              <button
                className="addToCart"
                onClick={() => addToCart(product.id)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TheProducts;
