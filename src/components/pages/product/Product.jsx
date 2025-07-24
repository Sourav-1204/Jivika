import React, { useContext, useEffect } from "react";
import "./product.css";
import { ShopContext } from "../../context/context";
import ProductCard from "../../card/ProductCard";

function Product() {
  const { products, handleViewMore, visibleLimit } = useContext(ShopContext);

  return (
    <div className="product-container">
      <h1>Latest Collections</h1>
      <div className="product-list-render">
        {products && products.length > 0
          ? products
              .slice(0, visibleLimit)
              .map((productItem) => (
                <ProductCard key={productItem.id} item={productItem} />
              ))
          : null}
      </div>
      <button
        disabled={visibleLimit >= products.length}
        className="view-more-btn"
        onClick={handleViewMore}
      >
        View More
      </button>
    </div>
  );
}

export default Product;
