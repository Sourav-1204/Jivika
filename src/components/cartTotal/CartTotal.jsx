import React, { useContext } from "react";
import "./cartTotal.css";
import { ShopContext } from "../../context/context";
import { MdCurrencyRupee } from "react-icons/md";
import { useSelector } from "react-redux";

export default function CartTotal() {
  const { cartItems, subTotal, count } = useSelector((state) => state.cart);

  const deliverCharges = count > 0 ? 20 : 0;

  return (
    <div className="w-full flex flex-col">
      <ul className="p-5">
        <li className="flex justify-between mt-2">
          <p>Price ({cartItems.length} items)</p>
          <p className="flex items-center text-blue-600">
            <MdCurrencyRupee />
            {subTotal.toFixed(2)}
          </p>
        </li>
        <li className="flex justify-between mt-2">
          <p>Discount</p>
          <p className="flex items-center text-green-500">
            <MdCurrencyRupee />0
          </p>
        </li>
        <li className="flex justify-between pb-2 mt-2 border-b border-[#bbb]">
          <p>Delivery Charges</p>
          <p className="flex items-center text-blue-500">
            <MdCurrencyRupee />
            {deliverCharges}
          </p>
        </li>
        <li className="flex justify-between text-lg font-bold mt-2">
          <p>Total Amount</p>
          <p className="flex items-center">
            <MdCurrencyRupee />
            {(subTotal + deliverCharges).toFixed(2)}
          </p>
        </li>
      </ul>
    </div>
  );
}
