import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductRender({ start, end }) {
  const { items, loadingProducts, errorProducts } = useSelector(
    (state) => state.products
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full my-2">
      <div className="grid gap-y-3">
        {items &&
          items.length > 0 &&
          items.slice(start, end).map((item) => (
            <div
              key={item.id}
              className="max-w-44 flex flex-col items-center border border-[#000] rounded-lg"
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className=" border-b border-[#aaa] rounded-lg bg-blue-100"
                />
              </div>
              <div className="w-full border-t border-[#aaa] rounded-lg p-2 mt-2">
                <p className="text-sm font-semibold">
                  {item.brand && item.brand}
                </p>
                <p className="truncate font-bold">{item.title}</p>
                <p className="flex items-center font-bold text-lg text-blue-500">
                  <MdOutlineCurrencyRupee /> {item.price}
                </p>
              </div>
              <div className="flex items-center gap-2 p-2">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="text-lg flex items-center justify-center p-2 bg-orange-500 text-white rounded-lg active:scale-95"
                >
                  <IoMdAdd />
                </button>
                <button
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="text-sm bg-blue-600 rounded-lg p-2 px-4 text-white active:scale-95"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
