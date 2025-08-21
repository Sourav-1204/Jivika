import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/context";
import "./productDetails.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import RatingStars from "./rating";
import Loader from "../../loader/loader";
import ProductCard from "../../card/ProductCard";
import AddAlert from "./addAlert";

export default function ProductDetails() {
  const { productId } = useParams();
  const {
    products,
    handleAddToCart,
    handleRemoveFromCart,
    toRupees,
    relatedProducts,
    handleAlert,
  } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(false);
  const [imgCount, setImgCount] = useState(0);

  async function fetchProductData() {
    try {
      setLoading(true);
      let data = products.filter((item) => item.id.toString() === productId);
      setProductData(data[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3 * 1000);
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

  // if (loading) {
  //   return (
  //     <div>
  //       <p>Loading please wait...</p>
  //     </div>
  //   );
  // }

  return !loading && productData ? (
    <div className="productdetails-super">
      {alert ? <AddAlert /> : null}
      <AddAlert />
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
                  handleAlert("Add");
                }}
              >
                Add To Cart
              </button>
              <button
                onClick={() => {
                  handleRemoveFromCart(productData.id);
                  handleAlert("Remove");
                }}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] border border-1.5 bg-gray-500 ruler" />
      {relatedProducts.length > 0 && !loading ? (
        <div className="w-full md:h-[450px] flex flex-col gap-10 items-center justify-center mt-[20px]">
          <div>
            <h3 className="md:text-5xl text-3xl font-semibold">
              Related Products
            </h3>
          </div>

          <div className="md:w-[80%] grid md:grid-cols-5 grid-cols-2 place-items-center gap-10">
            {relatedProducts
              .splice(0, Math.floor(Math.random() * 5))
              .map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <div className="productdetails-loading">
      <Loader />
    </div>
  );
}
