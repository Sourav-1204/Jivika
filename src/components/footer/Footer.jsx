import React from "react";
import "./footer.css";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="sub-container1">
          <img src="/logo1.svg" />
          <p>
            We're more than just an online store—we're a community that values
            quality, trust, and seamless shopping. Thanks for being a part of
            our journey!
          </p>
        </div>
        <div className="info-container">
          <p>Company</p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="info-container">
          <p>Policy</p>
          <ul>
            <li>Terms & Privacy</li>
            <li>Careers</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </div>
      <div className="divider"
        style={{ }}
      ></div>
      <p className="copyright-p">
        <span>
          <LuCopyright />
        </span>
        Copyight 2025@ jivika.com - All Rights Reserved
      </p>
    </div>
  );
}
