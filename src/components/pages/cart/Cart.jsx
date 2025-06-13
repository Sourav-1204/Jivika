import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/context";
import ProductCard from "../../card/ProductCard";
import "./cart.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import CartTotal from "../../cartTotal/CartTotal";

function Cart() {
  const { cartItem, handleRemoveFromCart } = useContext(ShopContext);

  const [deliveryFee, setDeliveryFee] = useState(0);

  const [itemCount, setItemCount] = useState(1);

  const navigate = useNavigate();
  function handleNavigate(getId) {
    navigate(`/products/${getId}`);
  }

  return (
    <div className="cart-container">
      <div className="cart-container-left">
        <h1>Your Cart</h1>
        {cartItem.length === 0 ? (
          <h2>Your cart is empty! add something to buy.</h2>
        ) : null}
        <div className="cart-container-inner1">
          {cartItem && cartItem.length > 0
            ? cartItem.map((item, ind) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="cart-item-card-details">
                    <p className="price">${item.price}</p>
                    <p>{item.title}</p>
                    <p>{itemCount}</p>
                  </div>
                  <input
                    type="number"
                    value={itemCount}
                    onChange={(e) => setItemCount(e.target.value)}
                  />
                  <MdDelete
                    onClick={() => handleRemoveFromCart(item.id)}
                    size={"30px"}
                  />
                </div>
              ))
            : null}
        </div>
        <hr
          style={{ width: "80%", border: "1px solid black", marginTop: "50px" }}
        />
      </div>
      <div className="cart-container-right">
        <div className="your-cart-details">
          <p className="head-price">Your Cart Summary</p>
          <CartTotal deliveryFee={deliveryFee} />
          <button onClick={() => navigate(`/place-orders`)}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
