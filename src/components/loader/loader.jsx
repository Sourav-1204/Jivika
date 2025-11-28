import React, { useContext } from "react";
import "./loader.css";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <Oval
      height={60}
      width={60}
      radius={9}
      color="green"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
