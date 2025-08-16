import React from "react";
import "./footer.css";
import { LuCopyright } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="sub-container1">
          <img src="/logo2.svg" onClick={()=>navigate('/')}/>
          <p>
            We're more than just an online store—we're a community that values
            quality, trust, and seamless shopping. Thanks for being a part of
            our journey!
          </p>
        </div>
        <div className="info-container">
          <p>Company</p>
          <ul>
            <Link to='/about'>
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/">
              <li>FAQs</li>
            </Link>
            <Link to="/">
              <li>Returns & Refunds</li>
            </Link>
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
      <div className="divider" style={{}}></div>
      <p className="copyright-p">
        <span>
          <LuCopyright />
        </span>
        Copyight 2025@ jivika.com - All Rights Reserved
      </p>
    </div>
  );
}
