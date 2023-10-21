import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menulist = [
    ["Home", "Coffee-Style-Website/"],
    ["Our Products", "Coffee-Style-Website/Our-Products"],
    ["Blog", "Coffee-Style-Website/Blog"],
    ["About", "Coffee-Style-Website/About"],
    ["Contact", "Coffee-Style-Website/Contact"],
    ["StyleGuide", "Coffee-Style-Website/StyleGuide"],
  ];

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <Link to={"Coffee-Style-Website/"}>CoffeeStyle.</Link>
        </h1>
        <ul className="menubar">
          {menulist.map((menu, idx) => (
            <li>
              <Link key={idx} to={menu[1]}>
                {menu[0]}
              </Link>
            </li>
          ))}
        </ul>
        <button>
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
          <span>9</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
