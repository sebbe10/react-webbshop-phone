import { Link } from "react-router-dom";
import "./navbar.css";
import ShopContext from "./Shopcontext";
import { useContext } from "react";
function Navbar() {
  const { cartItems } = useContext(ShopContext);

  const totalQuantity = Object.values(cartItems).reduce(
    (total, quanity) => total + quanity,
    0
  );

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <Link to="/">Shop</Link>
            </li>
            <li className="li">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="li">
              <Link to="/checkout">Checkout</Link>
            </li>

            <div className="theQuantity">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <p>{totalQuantity}</p>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
