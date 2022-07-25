import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function navbar() {
  const [productHendle, setProductHendle] = useState(false);
  console.log(productHendle);
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>SHOP</h1>
          </Link>
        </div>
        <ul className="menu">
          <Link
            to="/products"
            className="link-product"
            onMouseOver={() => setProductHendle(true)}
            onMouseOut={() => setProductHendle(false)}
          >
            <h1>Product</h1>
          </Link>

          <li className="products">
            <div
              className={productHendle ? "bar active" : "bar"}
              onMouseOver={() => setProductHendle(true)}
              onMouseOut={() => setProductHendle(false)}
            >
              <Link to="/products/seed" className="link">Seed</Link>
              <Link to="/products/tools"  className="link">Planting tools</Link>
            </div>
          </li>

          <li className="item">
            Blog
          </li>

          <div className="menu-login">
              <a href="" className="link-menu">Login</a>
            <p>/</p>
              <a href="" className="link-menu">Sing-up</a>
          </div>
          
          <div className="item">cart 0</div>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
