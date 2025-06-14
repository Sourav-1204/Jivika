import React from "react";
import "./contact.css";
import { LuMail } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-sub">
        <h5>CONTACT US</h5>
        <div className="contact-sub-left">
          <img src="./contact-img1.jpg" alt="" />
        </div>
        <div className="contact-sub-right">
          <div className="contact-info">
            <p>
              <b>Email:</b> support@jivika.com
            </p>
            <p>
              <b>Phone / WhatsApp:</b> +91 98765 43210
            </p>
            <p>
              <b>Office Address:</b> JIVIKA Pvt. Ltd. 2nd Floor, ABC Plaza, MG
              Road, New Delhi - 110001 India
            </p>
            <p>
              <b>Order & Delivery Questions:</b>
              Have an issue with your order? Reach out and we'll sort it out
              right away!
            </p>
            <div className="social-handles">
              <p>Connect With Us:</p>
              <ul>
                <li>
                  <FaInstagram color="#EE1346" />
                </li>
                <li>
                  <FaFacebook color="darkblue" />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaTwitter color="blue" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
