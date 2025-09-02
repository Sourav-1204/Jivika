import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export default function GlobalState({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(20);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  async function fetchProductList() {
    try {
      setLoading(true);
      const apiResponse = await fetch(
        "https://dummyjson.com/products?limit=100"
      );
      const result = await apiResponse.json();
      if (result && result.products && result.products.length > 0) {
        setErrorMsg("");
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Error occured : "+e.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  async function fetchRelatedProducts(getCurrentCategory) {
    // let cpyProducts = [...products];
    console.log(getCurrentCategory);
    if (products && products.length > 0 && getCurrentCategory) {
      setRelatedProducts(
        products.filter((item) => item.category === getCurrentCategory)
      );
    }
  }

  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((item) => item.category))]
      : [];

  useEffect(() => {
    fetchProductList();
  }, []);

  function handleAddToCart(getId) {
    const dummyProduct = products.find((item) => item.id === getId);
    if (dummyProduct && !cartItem.some((item) => item.id === getId)) {
      setCartItem([...cartItem, dummyProduct]);
    }
    setAddToCart(!addToCart);
  }

  function handleRemoveFromCart(getId) {
    setCartItem(
      getId !== "" ? cartItem.filter((item) => item.id !== getId) : cartItem
    );
    setAddToCart(!addToCart);
  }

  function handleViewMore() {
    if (visibleLimit < products.length) {
      setVisibleLimit((prev) => prev + 5);
    }
  }

  function toRupees(getPrice) {
    const price = 86 * getPrice;
    return price;
  }

  function handleAlert(getStatus) {
    if (getStatus === "Add") {
      setAlert(true);
      setAlertMsg("Added to cart!");
      setTimeout(() => {
        setAlert(false);
        setAlertMsg("");
      }, 2000);
    } else if (getStatus === "Remove") {
      setAlert(true);
      setAlertMsg("Removed from cart!");
      setTimeout(() => {
        setAlert(false);
        setAlertMsg("");
      }, 2000);
    }
  }
  
  // console.log(errorMsg,"errormsg");

  return (
    <ShopContext.Provider
      value={{
        loading,
        errorMsg,
        products,
        uniqueCategories,
        filteredItems,
        setFilteredItems,
        darkMode,
        setDarkMode,
        searchedProducts,
        handleAddToCart,
        cartItem,
        handleRemoveFromCart,
        addToCart,
        setAddToCart,
        handleViewMore,
        visibleLimit,
        setVisibleLimit,
        toRupees,
        fetchRelatedProducts,
        relatedProducts,
        handleAlert,
        alert,
        alertMsg,
        setAlert,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
