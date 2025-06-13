import React, { useContext } from "react";
import "./cartTotal.css";
import { ShopContext } from "../context/context";

export default function CartTotal({ deliveryFee }) {
  const { cartItem } = useContext(ShopContext);
  let totalPrice = 0;

  function CalTotalAmount() {
    const price = cartItem.reduce((sum, item) => sum + item.price, 0);
    totalPrice = price;
  }

  CalTotalAmount();
  return (
    <div className="total-price-details">
      <ul>
        <li>
          <p>Price ({cartItem.length} items)</p>
          <p style={{ color: "blue" }}>{totalPrice.toFixed(2)}$</p>
        </li>
        <li>
          <p>Delivery Charges</p>
          <p style={{ color: "green" }}>{deliveryFee}$</p>
        </li>
        <hr style={{ width: "80%", border: "1px solid black" }} />
        <li>
          <p>Total Price</p>
          <p>{(totalPrice + deliveryFee).toFixed(2)}$</p>
        </li>
      </ul>
    </div>
  );
}
