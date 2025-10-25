import React, { useEffect, useState } from "react";
import "./search.css";
// import { MdInput } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const navigate = useNavigate();

  const placeholderText = [
    "Search for Products...",
    "Mobiles",
    "Kitchen",
    "Sports",
    "School",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholderText.length);
      setAnimateKey((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  async function fetchSuggestionResult() {
    if (cache[input]) {
      setSearchResult(cache[input]);
      return;
    }
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      const result = await apiResponse.json();
      if (result && result.products) {
        setSearchResult(result.products);
        setCache((prev) => ({ ...prev, [input]: result.products }));
      }
    } catch (error) {
      console.error("Error -> ", error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.length > 1) {
        fetchSuggestionResult();
      } else {
        setSearchResult([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  function handleKeydown(e) {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => Math.min(prev + 1, searchResult.length - 1));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (activeIndex !== -1 && input !== searchResult[activeIndex].title) {
        setInput(searchResult[activeIndex].title);
        setActiveIndex(0);
        setShowResult(false);
      } else if (
        activeIndex === -1 ||
        input === searchResult[activeIndex].title
      ) {
        setShowResult(false);
        setTimeout(() => {
          navigate(`/search/results`, {
            state: {
              query: input,
              results: searchResult,
            },
          });
        }, 200);
        setActiveIndex(-1);
      }
    }
  }

  function handleSearchClick() {
    if (input) {
      navigate(`/search/results`, {
        state: {
          query: input,
          results: searchResult,
        },
      });
    }
  }

  return (
    <div className="md:w-full w-[80%] flex flex-col justify-center items-center search">
      <div className="relative w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center border rounded-lg bg-[#e8e8e8] overflow-hidden relative">
          {input === "" && (
            <span
              className="absolute left-[15px] placeholder-animate"
              key={animateKey}
            >
              {placeholderText[index]}
            </span>
          )}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
            onKeyDown={handleKeydown}
            className={`w-[80%] py-3 px-3 outline-0 transition-opacity duration-500`}
          />

          <div
            className="md:w-[15%] w-[20%] py-3 px-4 bg-[#9cb8b7] flex items-center justify-center border-l-1"
            onClick={handleSearchClick}
          >
            <IoSearchOutline size="24px" />
          </div>
        </div>
        {searchResult.length > 0 && showResult && (
          <ul className="absolute w-full border top-[49px] bg-[#f2fdf8] result">
            {searchResult.map((item, index) => (
              <li
                key={item.id}
                onMouseDown={() => {
                  setInput(item.title);
                }}
                className={`${
                  index === activeIndex ? "bg-[#fafae3]" : ""
                } flex gap-3`}
              >
                <img src={item.thumbnail} alt="" className="max-w-7" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
