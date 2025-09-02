import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Collection from "./components/pages/Collection/Collection";
import Contact from "./components/pages/contact/Contact";
import Cart from "./components/pages/cart/Cart";
import Login from "./components/pages/login/Login";
import Order from "./components/pages/Orders/Order";
import PlaceOrder from "./components/pages/placeOrder/PlaceOrder";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./components/context/context";
import ProductDetails from "./components/pages/product/productDetails";
import SearchResults from "./components/pages/SearchResults/SearchResults";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  const { darkMode } = useContext(ShopContext);
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className={`${darkMode ? "dark" : ""} body-container`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/place-orders" element={<PlaceOrder />} />
          <Route path="/search/results" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
