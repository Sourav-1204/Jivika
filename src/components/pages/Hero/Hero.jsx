import React, { useContext } from "react";
import "./hero.css";
import { ShopContext } from "../../context/context";

export default function Hero() {
  const { darkMode } = useContext(ShopContext);
  return (
    <div className="hero-container">
      <div className="hero-sub-container">
        <div className="left-container">
          <div className="left-container-content">
            <p>Our Bestsellers</p>
            <h2>Latest Arrivals</h2>
            <p>Shop Now</p>
          </div>
        </div>
        <div className="right-container">
          <img src="/image1.webp" alt="image" />
        </div>
      </div>
    </div>
  );
}
