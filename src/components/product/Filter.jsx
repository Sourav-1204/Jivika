import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../features/product/productSlice";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { sortBy } from "../../features/utils/sortData";

export default function Filter() {
  const { categories, loadingCategories, errorCategories, currentCategory } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibleCategoryCount, setVisibleCategoryCount] = useState(5);
  // const [currentCategory, setCurrentCategory] = useState("");

  // console.log(categories, "categories in filter");
  // console.log(currentCategory, "currentcategiry");

  const Sort = ({ sortBy }) => {
    return (
      <div>
        {sortBy &&
          sortBy.map((item) => (
            <div key={sortBy.id} className="ml-3 font-semibold">
              <label>
                <input type="checkbox" className="mr-1" />
                {item.value}
              </label>
              {item.subvalue && <Sort sortBy={item.subvalue} />}
            </div>
          ))}
      </div>
    );
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
        <Sort sortBy={sortBy} />
      </div>
    </div>
  );
}
