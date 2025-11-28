import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/context";
import ProductCard from "../../components/card/ProductCard";
import { MdCurrencyRupee, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import CartTotal from "../../components/cartTotal/CartTotal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  setQty,
} from "../../features/cart/cartSlice";
import { div } from "framer-motion/client";

function Cart() {
  const { cartItems, subTotal, count } = useSelector((state) => state.cart);
  const { handleRemoveFromCart } = useContext(ShopContext);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleNavigate(getId) {
    navigate(`/products/${getId}`);
  }

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="md:w-[90%] flex flex-col items-center mt-10 max-sm:mx-5">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-semibold">My Cart</h2>
          <button
            onClick={() => dispatch(clearCart())}
            className="px-3 py-1.5 border rounded max-md:text-sm text-white bg-gray-800"
          >
            Clear Cart
          </button>
        </div>
        <div className="w-full flex max-sm:flex-col max-sm:items-center justify-center mt-5 gap-10">
          <div className="sm:w-2/4 max-h-max border bg-white">
            {count === 0 ? (
              <div className="min-h-40 flex items-center justify-center p-2">
                <h2 className="text-xl font-semibold">
                  Your cart is empty! add something to buy.
                </h2>
              </div>
            ) : null}
            {count > 0 &&
              cartItems.length > 0 &&
              [...cartItems].reverse().map((item, index) => (
                <div
                  key={index}
                  className="flex border-b border-[#ccc] px-5 py-2"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="text-ellipsis size-40"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="flex items-center mt-2 text-xl font-semibold">
                      <MdCurrencyRupee />
                      {item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <CiCircleMinus
                          className="size-7 text-gray-500 cursor-pointer"
                          onClick={() =>
                            dispatch(
                              setQty({
                                id: item.id,
                                qty: item.quantity - 1,
                              })
                            )
                          }
                        />
                        <p className="px-5 py-0.5 border text-sm">
                          {item.quantity}
                        </p>
                        <CiCirclePlus
                          className="size-7 text-gray-500 cursor-pointer"
                          onClick={() =>
                            dispatch(
                              setQty({
                                id: item.id,
                                qty: item.quantity + 1,
                              })
                            )
                          }
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <MdDelete
                          className="size-6 text-red-500"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                        <p
                          className="font-bold max-sm:hidden"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="sm:w-2/5 w-full max-h-max flex flex-col border bg-white">
            <div className="flex items-center border-b border-[#bbb] p-5">
              <h2 className="font-semibold text-lg">Price Details</h2>
            </div>
            <div>
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
