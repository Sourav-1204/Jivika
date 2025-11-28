import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container-main">
      <h5>ABOUT US</h5>
      <div className="about-container-sub">
        <div className="about-up">
          <div className="about-up-left">
            <img src="/Designer.png" />
          </div>
          <div className="about-up-right">
            <div className="about-info">
              <p>
                <b> Welcome to JIVIKA </b>
                —your friendly online store where shopping is made easy and
                enjoyable. We're here to bring you a wide range of useful
                products, whether it's for your home, your daily routine, or
                something special you've been meaning to buy.
              </p>
              <p>
                We started this journey with one goal in mind: to make shopping
                better for everyone. That means fair prices, reliable service,
                and a smooth experience from start to finish. No long lines, no
                crowds—just what you need, delivered straight to your door.
              </p>
              <p>
                Our team works hard behind the scenes to choose products that
                are practical, good quality, and worth your time. We test
                things, listen to what people want, and always try to improve
                how we do things.
              </p>
              <p>
                But we're more than just a shop. We believe in people. We
                believe in small gestures—like easy returns, quick help when you
                need it, and clear communication that feels human, not robotic.
              </p>
              <p>
                Whether you're buying a daily item or treating yourself, we want
                you to feel happy with your choice—and with us.
              </p>
              <b>
                Thanks for stopping by. We're excited to be part of your day,
                and we look forward to serving you again and again.
              </b>
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <h5>WHY CHOOSE US ?</h5>
          <div className="about-bottom-sub">
            <ul>
              <li>
                <p className="head">Wide Range of Products</p>
                <p>
                  From everyday essentials to special finds—we've got something
                  for everyone.
                </p>
              </li>
              <li>
                <p className="head">Fast & Reliable Delivery</p>
                <p>
                  We know your time matters. That's why we make sure your order
                  gets to you quickly and safely.
                </p>
              </li>
              <li>
                <p className="head">Easy Returns</p>
                <p>
                  Not satisfied? No worries. Our smooth return process makes
                  things easy and stress-free.
                </p>
              </li>
              <li>
                <p className="head">Friendly Customer Support</p>
                <p>
                  Need help? Our team is always ready to assist with quick,
                  clear, and human responses.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
