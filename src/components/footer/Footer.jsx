import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="head">
          <h1>CoffeeStyle.</h1>
        </div>
        <div className="descripe">
          <p>Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.</p>
        </div>
        <div className="copyright"><span>CoffeeStyle Inc. © 1996</span></div>
        <div className="sub-head"><h1>MENU</h1></div>
        <div className="menu">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Our Products</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
            <li>
              <Link to={"/"}>Styleguide</Link>
            </li>
          </ul>
        </div>
        <div className="sub-head"><h1>FOLLOW US</h1></div>
        <div className="social">
          <ul>
            <li>
              <Link to={"/"}>Facebook</Link>
            </li>
            <li>
              <Link to={"/"}>Instagram</Link>
            </li>
            <li>
              <Link to={"/"}>Pinterest</Link>
            </li>
            <li>
              <Link to={"/"}>Twitter</Link>
            </li>
          </ul>
        </div>
        <div className="sub-head"><h1>CONTACT US</h1></div>
        <div className="contact">
          <p>We’re Always Happy to Help</p>
          <Link to={'/'}>us@coffeestyle.io</Link>
        </div>
        <div className="credit">
          <Link to={"/"}>Powered by Webflow</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
