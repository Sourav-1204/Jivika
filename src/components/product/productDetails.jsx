import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/context";
import "./productDetails.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import RatingStars from "./rating";
import Loader from "../../components/loader/loader";
import ProductCard from "../../components/card/ProductCard";
import AddAlert from "./addAlert";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

export default function ProductDetails() {
  const { productId } = useParams();

  const { cartItems } = useSelector((state) => state.cart);
  const { items } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  console.log(cartItems);
  const { products, relatedProducts, handleAlert } = useContext(ShopContext);

  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(false);
  const [imgCount, setImgCount] = useState(0);

  function fetchProductData() {
    try {
      setLoading(true);
      const product = items.find(
        (product) => JSON.stringify(product.id) === productId
      );
      setProductData(product);
      setLoading(false);
    } catch (e) {
      console.log(e);
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
              {productData.price}
            </p>
            <div className="rating">
              <p>{productData.rating}</p>
              <RatingStars rating={productData.rating} />
            </div>
            <div className="btn-container">
              <button
                className="bg-blue-500 text-white py-2 px-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
                type="button"
                onClick={() => {
                  dispatch(addToCart(productData));
                  handleAlert("Add");
                }}
              >
                Add To Cart
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
                type="button"
                disabled={!cartItems.some((item) => item.id === productData.id)}
                onClick={() => {
                  dispatch(removeFromCart(productData.id));
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
            {relatedProducts.splice(0, 5).map((item) => (
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
