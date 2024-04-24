import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Shop from "./Shop";
import Navbar from "./Navbar";
import { ShopContextProvider } from "./Shopcontext";
import ShowYouHaveOrder from "./ShowYouHaveOrder";
import Checkout from "./Checkout";

function MyRouterActivate() {
  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/order" element={<ShowYouHaveOrder />}></Route>
        </Routes>
      </ShopContextProvider>
    </>
  );
}

export default MyRouterActivate;
