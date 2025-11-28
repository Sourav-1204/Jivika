import { useNavigate } from "react-router-dom";
import "./card.css";
import { MdCurrencyRupee } from "react-icons/md";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/context";

export default function ProductCard({ item }) {
  const { toRupees, fetchRelatedProducts } = useContext(ShopContext);
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/products/${item.id}`);
  }

  return (
    <div
      className="card-container"
      onClick={() => {
        handleClick();
        fetchRelatedProducts(item.category);
      }}
    >
      <img src={item.thumbnail} alt={item.title} />
      <div className="product-details">
        <p>{item.brand}</p>
        <p>{item.title}</p>
        {/* <p>{item.description}</p> */}
        <p className="text-[#6565F6] flex items-center font-bold text-lg">
          <MdCurrencyRupee />
          {item.price}
        </p>
        <p>{item.category}</p>
      </div>
    </div>
  );
}
