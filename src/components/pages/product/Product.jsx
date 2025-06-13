import React, { useContext, useEffect } from "react";
import "./product.css";
import { ShopContext } from "../../context/context";
import ProductCard from "../../card/ProductCard";

function Product() {
  const {
    products,
    searchedProducts,
    filteredItems,
    setFilteredItems,
    search,
  } = useContext(ShopContext);



 
  return (
    <div className="product-container">
      <h1>Latest Collections</h1>
      <div className="product-list-render">
        {products && products.length > 0
          ? products.map((productItem) => (
              <ProductCard key={productItem.id} item={productItem} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Product;
