import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

export default function RecentlyViewed() {
  const { recentlyViewed } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    recentlyViewed &&
    recentlyViewed.length > 5 && (
      <div className="w-full flex flex-col p-2 pt-10">
        <div className="px-2">
          <p className="sm:text-5xl text-3xl font-bold">Recently Viewed</p>
        </div>
        <div className="w-full mt-5 flex gap-3 overflow-x-scroll scrollbar overflow-y-hidden px-2">
          {recentlyViewed.map((item) => (
            <div
              key={item.id}
              className="min-w-44 max-w-44 flex flex-col items-center border border-[#000] rounded-lg"
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="border-b border-[#aaa] rounded-lg bg-blue-100"
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                  }}
                />
              </div>
              <div
                className="w-full border-t border-[#aaa] rounded-lg p-2 mt-2"
                onClick={() => {
                  navigate(`/products/${item.id}`);
                }}
              >
                <p className="truncate font-bold">{item.title}</p>
                <p className="flex items-center font-bold text-lg text-blue-500">
                  <MdOutlineCurrencyRupee /> {item.price}
                </p>
                <p className="flex items-center font-bold gap-1">
                  <IoStar className="text-yellow-500" />
                  {item.rating}
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
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                  }}
                  className="text-sm bg-blue-600 rounded-lg p-2 px-4 text-white active:scale-95"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
