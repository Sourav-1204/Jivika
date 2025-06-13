import React, { useContext, useEffect, useState } from "react";
import "./collection.css";
import { ShopContext } from "../../context/context";
import ProductCard from "../../card/ProductCard";

function Collection() {
  const {
    filteredItems,
    setFilteredItems,
    uniqueCategories,
    products,
    search,
  } = useContext(ShopContext);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const [sortCondition, setSortCondition] = useState("relevant");

  function applyFilter() {
    let cpyProducts = [...products];
    if (currentSelectedCategory !== "") {
      cpyProducts = products.filter(
        (item) =>
          item.category.toLowerCase() === currentSelectedCategory.toLowerCase()
      );
    }
    if (search) {
      cpyProducts = products.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredItems(cpyProducts);
  }

  useEffect(() => {
    applyFilter();
  }, [currentSelectedCategory, search]);

  function sortProducts() {
    let fpCopy = [...filteredItems];

    switch (sortCondition) {
      case "low-high":
        setFilteredItems(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredItems(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    sortProducts();
  }, [sortCondition]);

  return (
    <div className="collection-container">
      <div className="filter-categories-option-container">
        <div className="filter-options">
          <p>Filter</p>
          <div className="filter-option-sub">
            {uniqueCategories && uniqueCategories.length > 0
              ? uniqueCategories.map((categoryItem, ind) => (
                  <button
                    onClick={() =>
                      setCurrentSelectedCategory(
                        currentSelectedCategory !== "" &&
                          currentSelectedCategory === categoryItem
                          ? ""
                          : categoryItem
                      )
                    }
                    className={`${
                      currentSelectedCategory === categoryItem ? "active" : ""
                    }`}
                    key={ind}
                  >
                    {categoryItem}
                  </button>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="filtered-products-container">
        <div className="sort-container">
          <h4>All Collections</h4>
          <select
            id="options"
            name="options"
            onChange={(e) => setSortCondition(e.target.value)}
          >
            <option value="relevant">Sort:Relevant</option>
            <option value="low-high">Sort:Low to high</option>
            <option value="high-low">Sort:High to low</option>
          </select>
        </div>
        <div className="filtered-poducts-render">
          {filteredItems && filteredItems.length > 0
            ? filteredItems.map((productItem) => (
                <ProductCard key={productItem.id} item={productItem} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Collection;
