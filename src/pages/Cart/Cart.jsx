import React from "react";
import ListProduct from "./component/ListProduct";
import { useSelector } from "react-redux";



//Custom hooks
import useCalulatePice from "../../hooks/useCalulatePice";

function Cart() {
  const item = useSelector((state) => state.cart);
  const data = item;
  const {allPice,tax,sum}  = useCalulatePice(data);
    
  return (
    <div className="cart">
      <div className="container">
        <div className="cart-items">
          <h1>My Cart</h1>
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
