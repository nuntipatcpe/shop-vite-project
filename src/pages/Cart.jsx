import React from "react";
import ListProduct from "../component/Cart/ListProduct";
import { useSelector } from "react-redux";
function Cart() {
  const item = useSelector((state) => state.cart);
  // const a = item.map((i)=> i)
  // console.log(a);

  const data = item;

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-items">
          <h1>My Cart</h1>
          {/* _______________ */}
          {data.map((item) => {
            return <ListProduct data={item} />;
          })}
        </div>
        <div className="summary">
          <h1>Product summary</h1>
          <div className="card-summary">
            <div className="item">
              <h2>Product pice</h2>
              <p>100</p>
              <p>USD</p>
            </div>
            <div className="item">
              <h2>PTax 7%</h2>
              <p>7</p>
              <p>USD</p>
            </div>
            <div className="item">
              <h2>Shipping cost</h2>
              <p>100</p>
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
