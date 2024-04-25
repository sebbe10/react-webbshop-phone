import { useContext } from "react";
import allProducts from "./products";
import { ShopContext } from "./Shopcontext";
import { useNavigate } from "react-router-dom";
import "./cartitems.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeToCart, getTotalAmount } =
    useContext(ShopContext);

  const handleCartPrice = () => {
    let totalCostForEachProduct = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let findTotalEachPrice = allProducts.find((product) => product.price);
        totalCostForEachProduct += cartItems[item] * findTotalEachPrice.price;
      }
    }
    return totalCostForEachProduct;
  };

  const totalAmount = handleCartPrice();

  const totalQuantity = Object.values(cartItems).reduce(
    (total, quanity) => total + quanity,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div className="theCart">
        <h1>Cart</h1>

        {totalAmount > 0 ? (
          <div className="checkoutSite">
            <div className="cartItems">
              {allProducts.map((product, index) => {
                if (cartItems[product.id] !== 0) {
                  return (
                    <div className="singleCartItem" key={index}>
                      <div>
                        <img src={product.img} alt="" />
                      </div>
                      <div>
                        <p>{product.name}</p>
                      </div>
                      <div>
                        <p>{cartItems[product.id] * product.price} kr</p>
                      </div>

                      <div className="inputAndButton">
                        <button
                          className="deleteBtn"
                          onClick={() => removeToCart(product.id)}>
                          -
                        </button>
                        <input
                          value={cartItems[product.id]}
                          onChange={(e) =>
                            getTotalAmount((Number(e.target.value), product.id))
                          }
                        />
                        <button
                          className="addBtn"
                          onClick={() => addToCart(product.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="theStyleForButtonsInCheckout">
              <button onClick={() => navigate("/product")}>
                Countinue shopping
              </button>
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>

            <div className="theCheckoutCost">
              <div className="layoutForTotalCost">
                <p className="totalCostSum">Totalcost: {totalAmount}</p>
              </div>
              <div>
                <p>Quantity: {totalQuantity}</p>
              </div>
              <div className="checkoutButton">
                <Link to="/checkout">Checkout</Link>
              </div>
            </div>
          </div>
        ) : (
          <h1>The cart is empty</h1>
        )}
      </div>
    </>
  );
}

export default Cart;
