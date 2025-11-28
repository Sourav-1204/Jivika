import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Collection from "./pages/Collection/Collection";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/context";
import ProductDetails from "./components/product/productDetails";
import SearchResults from "./pages/SearchResults/SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/product/productThunks";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  const { darkMode } = useContext(ShopContext);

  const { status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status]);

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-orders" element={<PlaceOrder />} />
          <Route path="/search/results" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
