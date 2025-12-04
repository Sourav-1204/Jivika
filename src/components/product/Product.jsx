import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import { ShopContext } from "../../context/context";
import ProductCard from "../../components/card/ProductCard";
import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import {
  fetchCategories,
  fetchProducts,
} from "../../features/product/productThunks";
import ProductRender from "./ProductRender";

function Product() {
  const { items, loadingProducts, errorProducts } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const Page_Size = 12;
  const totalProducts = items.length;
  const noOfPages = Math.ceil(totalProducts / Page_Size);

  const start = currentPage * 12;
  const end = start + Page_Size;

  const handleCurrentPage = (pageNo) => {
    console.log(pageNo);
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  if (errorProducts) {
    return (
      <div className="w-full md:h-[600px] h-[450px] flex items-center justify-center">
        <h1 className="md:text-5xl text-4xl font-bold text-red-500">
          {errorProducts}
        </h1>
      </div>
    );
  }

  if (loadingProducts) {
    return (
      <div className="w-full md:h-[600px] h-[450px] flex items-center justify-center">
        <h1 className="md:text-5xl text-4xl">
          <Loader />
        </h1>
      </div>
    );
  }

  // console.log(currentPage, noOfPages, "texting...");

  return (
    <div className="w-full flex flex-col items-center p-2 pt-10 ">
      <div className="w-full">
        <h1 className="text-5xl font-bold">Our Products</h1>
      </div>
      <div className="w-full flex max-sm:flex-col gap-5 mt-4">
        <div className="w-[20%] max-h-[400px] overflow-y-scroll scrollbar max-sm:w-[80%] min-w-72 flex flex-col p-5 border-r max-sm:border-none border-[#ccc]">
          <Filter />
        </div>
        <div className="w-[80%] h-[600px] overflow-scroll max-sm:w-full flex items-center">
          <ProductRender start={start} end={end} />
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <div className="w-[80%] max-sm:w-full flex items-center justify-center gap-2 mt-5">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="rounded-md bg-black text-white py-2 px-5 disabled:bg-gray-500 cursor-pointer disabled:cursor-not-allowed"
          >
            Prev
          </button>
          {[
            ...Array(noOfPages)
              .keys()
              .map((no, ind) => (
                <button
                  key={ind}
                  onClick={() => setCurrentPage(no)}
                  className={`text-sm font-bold py-2 px-3 border-2 border-orange-400 rounded-lg active:scale-95 ${
                    currentPage === no ? "bg-orange-400 text-white" : ""
                  }`}
                >
                  {no + 1}
                </button>
              )),
          ]}
          <button
            disabled={currentPage === noOfPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="rounded-md bg-black text-white py-2 px-5 disabled:bg-gray-500 cursor-pointer disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
