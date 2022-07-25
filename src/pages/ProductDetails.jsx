import React, { useState } from "react";
// import {useState} from 'react'

function ProductDetails() {
  const [count, setCount] = useState(0);
  return (
    <div className="product-details">
      <div className="container">
        <h1 className="title">Product details</h1>
        <div className="detail-con">
          <div className="img">
            <img src="/src/assets/img/bg-2.png" alt="" />
          </div>

          <div className="detail">
            <div className="name">Cannabis sativa</div>
            <div className="pice">$500</div>

            <div className="num">
              <button
                className="increase"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button
                className="decrease"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="btn">
              <button className="add-cart">Add to cart</button>
              <button className="buy">Buy</button>
            </div>
            <div className="description">
              <h1>Product details</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, veritatis.
              </p>
            </div>
          </div>
        </div>

        <div className="gird-container-img">
          <h1>Picture</h1>
          <div className="grid">
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-1.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
            <img src="/src/assets/img/bg-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
