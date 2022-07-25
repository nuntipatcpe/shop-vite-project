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
            <Link to ='/Blog'className="link-menu">Blog</Link>
          </li>

          <div className="menu-login">
              <Link to ='/login'className="link-menu">Login</Link>
            <p>/</p>
              <Link  to ='/singup' className="link-menu">Sing-up</Link>
          </div>
          
          <div className="item">
          <Link  to ='/cart' className="link-menu">cart 0</Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
