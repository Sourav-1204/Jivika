import React, { useContext, useState } from "react";
import "./placeorder.css";
import CartTotal from "../cartTotal/CartTotal";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";

function PlaceOrder() {
  const [deliveryFee, setDeliveryFee] = useState(0);
  return (
    <div className="place-order-container">
      <div className="place-order-container-left">
        <p>Delivery Information</p>
        <div className="delivery-input-container">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="number" placeholder="Contact No." />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Area" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <button>Confirm</button>
      </div>
      <div className="place-order-container-right">
        <div className="cartotal-details">
          <h5>Cart Total</h5>
          <CartTotal deliveryFee={deliveryFee} />
        </div>
        <div className="icon-container-inner">
          <FaCcPaypal size={"80px"} color="#312FE3" />
          <FaCcApplePay size={"80px"} fill="#98989B" />
          <FaCcAmazonPay size={"80px"} fill="#01001D" />
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
