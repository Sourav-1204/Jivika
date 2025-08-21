import React, { useContext } from "react";
import "./loader.css";
import { ShopContext } from "../context/context";
const Loader = () => {
  const { darkMode } = useContext(ShopContext);
  return (
    <div className={`loader ${darkMode ? "dark" : ""}`}>
      <span className="l">L</span>
      <span className="o">o</span>
      <span className="a">a</span>
      <span className="d">d</span>
      <span className="i">i</span>
      <span className="n">n</span>
      <span className="g">g</span>
      <span className="d1">.</span>
      <span className="d2">.</span>
    </div>
  );
};

export default Loader;
