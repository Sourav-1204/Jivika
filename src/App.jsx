import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Collection from "./components/pages/Collection/Collection";
import Contact from "./components/pages/contact/Contact"
import Cart from "./components/pages/cart/Cart";
import Login from "./components/pages/login/Login";
import Order from "./components/pages/Orders/Order";
import PlaceOrder from "./components/pages/placeOrder/PlaceOrder";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { ShopContext } from "./components/context/context";
import ProductDetails from "./components/pages/product/productDetails";

function App() {
  const { darkMode } = useContext(ShopContext);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
