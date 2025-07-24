import { useNavigate } from "react-router-dom";
import "./card.css";
import { MdCurrencyRupee } from "react-icons/md";
import { useContext, useState } from "react";
import { ShopContext } from "../context/context";

export default function ProductCard({ item }) {
  const {toRupees} = useContext(ShopContext);
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
        <p style={{ color: "#6565F6",display:"flex",alignItems:"center"}}>
      <MdCurrencyRupee />{Math.floor(toRupees(item.price))}
        </p>
        <p>{item.category}</p>
      </div>
    </div>
  );
}
