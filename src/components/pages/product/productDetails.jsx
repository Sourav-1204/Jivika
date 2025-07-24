import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/context";
import "./productDetails.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import RatingStars from "./rating";

export default function ProductDetails() {
  const { productId } = useParams();
  const { products, handleAddToCart, handleRemoveFromCart, toRupees } =
    useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(false);
  const [imgCount, setImgCount] = useState(0);

  async function fetchProductData() {
    try {
      setLoading(true);
      let data = products.filter((item) => item.id.toString() === productId);
      setProductData(data[0]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  function handleImgSubCount() {
    if (imgCount > 0) {
      setImgCount((prev) => prev - 1);
    } else {
      setImgCount((prev) => prev + (productData.images.length - 1));
    }
  }

  function handleImgAddCount() {
    if (imgCount < productData.images.length - 1) {
      setImgCount((prev) => prev + 1);
    } else {
      setImgCount((prev) => prev - (productData.images.length - 1));
    }
  }

  return productData ? (
    <div className="productdetails-container">
      <div className="productDetails-left">
        <GrLinkPrevious className="prev-icon" onClick={handleImgSubCount} />
        <div className="left-inner-div">
          <img src={productData.images[imgCount]} />
        </div>
        <GrLinkNext className="next-icon" onClick={handleImgAddCount} />
        <div className="image-idetifier-container">
          {productData.images.length > 0
            ? productData.images.map((item, ind) => (
                <div
                  key={ind}
                  className={`current-images-idetifier ${
                    ind === imgCount ? "active" : ""
                  }`}
                ></div>
              ))
            : null}
        </div>
      </div>
      <div className="productDetails-right">
        <div className="details-inner1">
          <p className="title">{productData.title}</p>
          <p className="brand">{productData.brand}</p>
          <p className="description">{productData.description}</p>
          <p style={{ color: "#6565F6" }} className="price">
            <MdCurrencyRupee />
            {Math.floor(toRupees(productData.price)) + ".00"}
          </p>
          <div className="rating">
            <p>{productData.rating}</p>
            <RatingStars rating={productData.rating} />
          </div>
          <div className="btn-container">
            <button
              onClick={() => {
                handleAddToCart(productData.id);
              }}
            >
              Add To Cart
            </button>
            <button
              onClick={() => {
                handleRemoveFromCart(productData.id);
              }}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ margin: "50px auto", fontSize: "35px" }}>
      {loading ? <h1>Loading data ! please wait...</h1> : null}
    </div>
  );
}
