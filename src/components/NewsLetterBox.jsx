import React from "react";
import { BsJustify } from "react-icons/bs";

function NewsLetterBox() {
  const styles = {
    main_container: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "30px auto",
      gap: "20px",
    },
    dark: {
      fontWeight: "800",
      fontSize: "40px",
      marginTop: "20px",
    },
    extraText: {
      fontSize: "20px",
      fontWeight: "300",
    },
    email_container: {
      width: "60%",
      margin: "10px 0",
      display: "flex",
      justifyContent: "center",
    },
    input: {
      width: "60%",
      fontSize: "17px",
      padding: "15px 20px",
      border: "none",
      outline: "none",
      backgroundColor: "#dddddd",
    },
    btn: {
      padding: "15px 30px",
      border: "1px solid black",
      backgroundColor: "#000101",
      color: "#ffffff",
    },
  };
  return (
    <div style={styles.main_container} className="offer-container">
      <p style={styles.dark}>Subscribe & Get Flat 20% Off</p>
      <p style={styles.extraText}>Subscribe now! To avail the offer.</p>
      <div style={styles.email_container} className="email-input-container">
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email..."
        />
        <buton style={styles.btn}>Subscribe</buton>
      </div>
    </div>
  );
}

export default NewsLetterBox;
