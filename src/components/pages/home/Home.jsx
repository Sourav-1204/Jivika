import React from "react";
import Hero from "../Hero/Hero";
import Product from "../product/Product";
import OurPolicy from "../../ourPolicy";
import NewsLetterBox from "../../newsletter/NewsLetterBox";

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Hero />
      <Product />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
}

export default Home;
