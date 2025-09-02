import React, { useContext, useState } from "react";
import "./product.css";
import { ShopContext } from "../../context/context";
import ProductCard from "../../card/ProductCard";
import Loader from "../../loader/loader";

function Product() {
  const { products, handleViewMore, visibleLimit, loading, errorMsg } =
    useContext(ShopContext);

  if (errorMsg) {
    return (
      <div className="w-full md:h-[600px] h-[450px] flex items-center justify-center">
        <h1 className="md:text-5xl text-4xl font-bold text-red-500">{errorMsg}</h1>
      </div>
    );
  }

  if (loading && !errorMsg) {
    return (
      <div className="w-full md:h-[600px] h-[450px] flex items-center justify-center">
        <h1 className="md:text-5xl text-4xl">
          <Loader />
        </h1>
      </div>
    );
  }

  return (
    <div className="product-container">
      <h1>Latest Collections</h1>
      <div className="product-list-render">
        {!loading && !errorMsg && products && products.length > 0
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
