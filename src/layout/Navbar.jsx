import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function navbar() {
  const [productHendle, setProductHendle] = useState(false);

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

          <li className="item">
            <div
              className={productHendle ? "bar active" : "bar"}
              onMouseOut={() => setProductHendle(false)}
              onMouseOver={() => setProductHendle(true)}
            >
              <Link to="/products/seed" className="link">Seed</Link>
              <Link to="/products/tools"  className="link">Planting tools</Link>
            </div>
          </li>

          <li className="item">
            <a href="">Blog</a>
          </li>
          <div className="menu-login">
            <li>
              <a href="">Log</a>
            </li>
            <p>/</p>
            <li className="item">
              <a href="">Sing-up</a>
            </li>
          </div>
          <div className="cart">cart 0</div>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
