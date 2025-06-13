import { useNavigate } from "react-router-dom";
import "./card.css";
import { useContext, useState } from "react";
import { ShopContext } from "../context/context";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/products/${item.id}`);
  }
  return (
    <div className="card-container" onClick={handleClick}>
      <img src={item.thumbnail} alt={item.title} />
      <div className="product-details">
        <p>{item.brand}</p>
        <p>{item.title}</p>
        {/* <p>{item.description}</p> */}
        <p style={{ color: "blue" }}>{item.price}$</p>
        <p>{item.category}</p>
      </div>
    </div>
  );
}
