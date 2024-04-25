import { useContext } from "react";
import allProducts from "./products";
import ShopContext from "./Shopcontext";
import "./order.css";

function ShowYouHaveOrder() {
  const { cartItems } = useContext(ShopContext);

  let myInfo = JSON.parse(localStorage.getItem("saveinfo"));

  const handleTotalCost = () => {
    let totalCost = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(items)
        );

        totalCost += cartItems[items] * itemInfo.price;
      }
    }
    return totalCost;
  };

  const showTotalCost = handleTotalCost();

  return (
    <>
      <h1>Du har nu beställt</h1>

      <div className="theOrder">
        <div className="yourOrder">
          <div className="namesAboutYou">
            <div className="names">
              <p>Firstname: {myInfo.firstname} </p>
            </div>
            <p className="lines"></p>

            <div className="names">
              <p>lastname: {myInfo.lastname}</p>
            </div>
            <p className="lines"></p>

            <div className="names">
              <p>Email: {myInfo.email}</p>
            </div>
            <p className="lines"></p>
          </div>

          <div>
            <div className="orderH3">
              <h3>Your order </h3>
            </div>
            <div className="order">
              {allProducts.map((product, index) => {
                if (cartItems[product.id] !== 0) {
                  return (
                    <div className="infoAboutOrder" key={index}>
                      <div>
                        <p>Name: {product.name}</p>
                      </div>

                      <div>
                        <p>Quantity: {cartItems[product.id]}</p>
                      </div>

                      <div>
                        <p>
                          Total cost: {cartItems[product.id] * product.price} kr
                        </p>
                      </div>
                    </div>
                  );
                }
              })}

              <h3>Total cost: {showTotalCost}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShowYouHaveOrder;
