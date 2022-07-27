import React from "react";
import ListProduct from "../component/Cart/ListProduct";
import { useSelector } from "react-redux";
import { useState } from "react";
function Cart() {
  const item = useSelector((state) => state.cart);
  const data = item;
    
  let allPice = data.reduce((pre,currentValue)=>pre+(currentValue.pice*currentValue.quality),0);
  let tax = ((7/100)*allPice);
  let sum = allPice-tax;


  return (
    <div className="cart">
      <div className="container">
        <div className="cart-items">
          <h1>My Cart</h1>
          {/* _______________ */}
          {data.map((item) => {
            return (
              <div key={item.id}><ListProduct data={item} /></div>
            )
          })}
        </div>
        <div className="summary">
          <h1>Product summary</h1>
          <div className="card-summary">
            <div className="item">
              <h2>All price</h2>
              <p>{allPice}</p>
              <p>USD</p>
            </div>
            <div className="item">
              <h2>Tax 7%</h2>
              <p>{tax.toFixed(2)}</p>
              <p>USD</p>
            </div>
            <div className="item">
              <h2>Cost</h2>
              <p>{sum.toFixed(2)}</p>
              <p>USD</p>
            </div>
          </div>
          <div className="btn">
            <button>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
