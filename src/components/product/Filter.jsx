import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentCategory,
  sortProducts,
} from "../../features/product/productSlice";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function Filter() {
  const { categories, loadingCategories, errorCategories, currentCategory } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibleCategoryCount, setVisibleCategoryCount] = useState(5);
  const [sortParam, setSortParam] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(sortProducts({sortParam, sortOrder}));
  }, [sortParam, sortOrder]);
  console.log(sortParam, sortOrder, "sort");

  const handleSortParam = (getParam, getorder) => {
    // console.log(getParam, getorder, "in function");
    if (getParam !== sortParam || getorder !== sortOrder) {
      setSortParam(getParam);
      setSortOrder(getorder);
    } else if (getParam === sortParam || getorder === sortOrder) {
      setSortParam("");
      setSortOrder("");
    } else if (getParam !== "") {
      setSortParam(getParam);
      setSortOrder(getorder);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div>
        <h3 className="text-xl font-semibold mb-2">Filters</h3>
      </div>
      {categories && categories.length > 0 ? (
        <div>
          <p className="text-lg font-semibold mb-1">Categories</p>
          {categories.slice(0, visibleCategoryCount).map((item, index) => (
            <div className="ml-3 font-semibold" key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={currentCategory === item.slug}
                  onChange={() => dispatch(setCurrentCategory(item.slug))}
                  className="mr-1 mt-1"
                />
                {item.name}
              </label>
            </div>
          ))}
          <div className="max-w-40 ml-3 flex items-center justify-end">
            <button className="flex items-center justify-center rounded-full shadow-[0_2px_5px_#666] cursor-pointer mt-2 bg-emerald-200">
              {visibleCategoryCount >= categories.length ? (
                <RiArrowDropUpLine
                  className="size-8"
                  onClick={() => setVisibleCategoryCount(5)}
                />
              ) : (
                <RiArrowDropDownLine
                  className="size-8"
                  onClick={() => setVisibleCategoryCount((prev) => prev + 3)}
                />
              )}
            </button>
          </div>
        </div>
      ) : null}
      <div>
        <p className="text-lg font-semibold mb-1">Sort By</p>
        <div className="flex flex-col ml-3 font-semibold">
          <div className="flex flex-col">
            <label>
              <input
                type="checkbox"
                checked={sortParam === "price" || sortOrder !== ""}
                onChange={() => handleSortParam("price", "asc")}
                className="mr-1 mt-1"
              />
              Price
            </label>
            <label className="ml-3">
              <input
                type="checkbox"
                checked={sortOrder === "asc"}
                onChange={() => handleSortParam("price", "asc")}
                className="mr-1 mt-1"
              />
              Low-High
            </label>
            <label className="ml-3">
              <input
                type="checkbox"
                checked={sortOrder === "des"}
                onChange={() => handleSortParam("price", "des")}
                className="mr-1 mt-1"
              />
              High-Low
            </label>
          </div>
          <label>
            <input
              type="checkbox"
              checked={sortParam === "rating"}
              onChange={() => handleSortParam("rating", "")}
              className="mr-1 mt-1"
            />
            Rating
          </label>
        </div>
      </div>
    </div>
  );
}
