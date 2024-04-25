import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

import Navbar from "./Navbar";
import { ShopContextProvider } from "./Shopcontext";
import ShowYouHaveOrder from "./ShowYouHaveOrder";
import Checkout from "./Checkout";

import TheProducts from "./TheProducts";
import Home from "./Home";
import ProductDisplay from "./ProductDisplay";

function MyRouterActivate() {
  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<TheProducts />}></Route>
          {/* <Route path=":productId" element={<Product />}></Route> */}

          <Route
            path="/product/:productId"
            element={<ProductDisplay />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/order" element={<ShowYouHaveOrder />}></Route>
        </Routes>
      </ShopContextProvider>
    </>
  );
}

export default MyRouterActivate;
