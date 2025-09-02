import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../card/ProductCard";

export default function SearchResults() {
  const location = useLocation();
  const { query, results } = location.state || [];

  // console.log(query, results, "result and query in searchresults");
  if (results.length === 0) {
    return (
      <div className="w-full md:h-[450px] flex items-center justify-center">
        <p className="md:text-4xl text-2xl text-red-400">
          No product found with name {query}
        </p>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[80%] w-[90%] flex flex-col justify-center items-center my-15 space-y-15">
        <div className="w-full">
          <h4 className="md:text-3xl text-2xl font-semibold">
            Search Results for {query}
          </h4>
        </div>
        <div className="w-full grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-[20px] place-items-center">
          {results && results.length > 0
            ? results.map((item) => <ProductCard key={item.id} item={item} />)
            : null}
        </div>
      </div>
    </div>
  );
}
