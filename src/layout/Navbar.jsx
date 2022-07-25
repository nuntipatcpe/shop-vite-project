import React from "react";
import { useState } from "react";

function navbar() {
  const [productHendle,setProductHendle] = useState(false);

  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          <h1>SHOP</h1>
        </div>
        <ul className="menu">
          <li className='item' onClick={()=>setProductHendle(!productHendle)}>
            <h1 className="po">Product</h1>
              <div className={productHendle ? 'bar active' : 'bar' }>
                <p><a href="#seed">Seed</a></p>
                <p><a href="#tools">Planting tools</a></p>
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
