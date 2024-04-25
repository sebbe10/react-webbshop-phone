import ShopContext from "./Shopcontext";
import { useContext, useState } from "react";
import allProducts from "./products";
import "./checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
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
    (total, quantity) => total + quantity,
    0
  );

  const [formData, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handeleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("saveinfo", JSON.stringify(formData));
    window.location.href = "/order";

    if (
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.email.trim() === ""
    ) {
      return (window.location.href = "/checkout");
    }
  };

  return (
    <>
      <div className="allCheckout">
        <h1>Checkout</h1>

        {totalAmount > 0 ? (
          <div>
            <div className="checkout">
              {allProducts.map((product, index) => {
                if (cartItems[product.id] > 0) {
                  return (
                    <div className="checkoutProduct" key={index}>
                      <div>
                        <img src={product.img} alt="" />
                      </div>
                      <div>
                        <p>Quantity {cartItems[product.id]}</p>
                        <p>
                          Total price: {cartItems[product.id] * product.price}{" "}
                          kr
                        </p>
                      </div>
                      <div className="checkoutButtons">
                        <button onClick={() => removeToCart(product.id)}>
                          -
                        </button>
                        <button onClick={() => addToCart(product.id)}>+</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="theSendYourInfo">
              <form action="/order" onSubmit={handleSubmit}>
                <div className="divForm">
                  <label>Firstname:</label>
                  <input
                    className="firstname"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handeleChange}
                    placeholder="firstname"
                  />
                </div>
                <div className="divForm">
                  <label>Lastname:</label>
                  <input
                    className="lastname"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handeleChange}
                    placeholder="lastname"
                  />
                </div>
                <div className="divForm">
                  <label>Email</label>
                  <input
                    className="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handeleChange}
                    placeholder="email"
                  />
                </div>
                <div className="theSendButton">
                  <button type="submit">Make a order</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <h1>Your checkout is empty</h1>
        )}
      </div>
    </>
  );
}

export default Checkout;
