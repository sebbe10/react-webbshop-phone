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

  function opmenMenu() {
    document
      .querySelector(".theHamburgerMenuBehind")
      .classList.toggle("activate");
    document.querySelector(".touchRemove").classList.toggle("activate");
  }

  function closeMenu() {
    document
      .querySelector(".theHamburgerMenuBehind")
      .classList.remove("activate");
    document.querySelector(".touchRemove").classList.remove("activate");
  }

  function removeMenu() {
    document
      .querySelector(".theHamburgerMenuBehind")
      .classList.remove("activate");
    document.querySelector(".touchRemove").classList.remove("activate");
  }
  return (
    <>
      <header className="theHeader">
        <Link className="theHeadName" to="/">
          <h1>PhoneStore</h1>
        </Link>

        <div onClick={() => opmenMenu()} className="myHamburgerMenu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      <div onClick={() => removeMenu()} className="touchRemove">
        <div className="theHamburgerMenuBehind">
          <div onClick={() => closeMenu()} className="closeMenu">
            <div className="close1"></div>
            <div className="close2"></div>
          </div>
          <nav className="theNav">
            <ul className=" theUl">
              <li className="theLi">
                <Link to="/">Home</Link>
              </li>

              <li className="theLi">
                <Link to="/product">Product</Link>
              </li>

              <li className="theLi">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="theLi">
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
        </div>
      </div>

      <header className="header">
        <div className="phonestoretitle">
          <Link to="/">
            <h1>PhoneStore</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <Link to="/">Home</Link>
            </li>

            <li className="li">
              <Link to="/product">Product</Link>
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
