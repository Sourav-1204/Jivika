import React from "react";
import "./ourPolicy.css";
import { RiExchangeFundsFill } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineChangeCircle } from "react-icons/md";

const myStyle = {
  icons: {
    fontSize: "35px",
  },
};

export default function OurPolicy() {
  return (
    <div className="policy-container">
      <div className="policy-wrapper">
        <RiExchangeFundsFill style={myStyle.icons} />
        <h3>Easy Exchange Policy</h3>
        <p>We provide hassie free Exchange policy</p>
      </div>
      <div className="policy-wrapper">
        <MdOutlineChangeCircle style={myStyle.icons} />
        <h3>7 Days Resturn Policy</h3>
        <p>We provide 7 days free return policy</p>
      </div>
      <div className="policy-wrapper">
        <RiCustomerServiceFill style={myStyle.icons} />
        <h3>Best customer support</h3>
        <p>We provide 44/7 customer support</p>
      </div>
    </div>
  );
}
