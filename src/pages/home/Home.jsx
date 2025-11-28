import React from "react";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/product/Product";
import OurPolicy from "../../components/ourPolicy";
import NewsLetterBox from "../../components/newsletter/NewsLetterBox";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
    // style={{
    //   width: "100%",
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // }}
    >
      <Hero />
      <Product />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
}

export default Home;
