import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export default function GlobalState({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(20);

  async function fetchProductList() {
    try {
      setLoading(true);
      const apiResponse = await fetch(
        "https://dummyjson.com/products?limit=100"
      );
      const result = await apiResponse.json();
      if (result && result.products && result.products.length > 0) {
        setProducts(result.products);
        setLoading(false);
        setFilteredItems(result.products);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
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

  return (
    <ShopContext.Provider
      value={{
        products,
        uniqueCategories,
        filteredItems,
        setFilteredItems,
        darkMode,
        setDarkMode,
        searchParam,
        setSearchParam,
        search,
        setSearch,
        searchedProducts,
        handleAddToCart,
        cartItem,
        handleRemoveFromCart,
        addToCart,
        setAddToCart,
        handleViewMore,
        visibleLimit,
        setVisibleLimit,
        toRupees
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
