import React from "react";
import { BsJustify } from "react-icons/bs";
import "./newsLetter.css";

function NewsLetterBox() {
  const styles = {
    extraText: {
      fontSize: "20px",
      fontWeight: "300",
    },
  };
  return (
    <div className="offer-container">
      <p className="darkText">Subscribe & Get Flat 20% Off</p>
      <p style={styles.extraText}>Subscribe now! To avail the offer.</p>
      <div className="email-input-container">
        <input type="email" placeholder="Enter your email..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetterBox;
