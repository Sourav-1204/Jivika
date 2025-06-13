import React from "react";
import { RiExchangeFundsFill } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineChangeCircle } from "react-icons/md";

const myStyle = {
  policyWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icons: {
    fontSize: "30px",
  },
  h4: {
    fontWeight: "700",
    margin: "10px 0",
  },
};

export default function OurPolicy() {
  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "30px auto",
      }}
      className="policy-container"
    >
      <div style={myStyle.policyWrapper} className="policy-wrapper">
        <RiExchangeFundsFill style={myStyle.icons} />
        <h3 style={myStyle.h4}>Easy Exchange Policy</h3>
        <p>We provide hassie free Exchange policy</p>
      </div>
      <div style={myStyle.policyWrapper} className="policy-wrapper">
        <MdOutlineChangeCircle style={myStyle.icons} />
        <h3 style={myStyle.h4}>7 Days Resturn Policy</h3>
        <p>We provide 7 days free return policy</p>
      </div>
      <div style={myStyle.policyWrapper} className="policy-wrapper">
        <RiCustomerServiceFill style={myStyle.icons} />
        <h3 style={myStyle.h4}>Best customer support</h3>
        <p>We provide 44/7 customer support</p>
      </div>
    </div>
  );
}
