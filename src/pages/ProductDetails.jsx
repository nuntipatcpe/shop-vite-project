import React, { useState } from "react";
// import {useState} from 'react'
import{useParams}from 'react-router-dom';

import {product} from '../assets/dataProducts/index';
import {useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import AddBtnComponent from "../component/Button/AddBtnComponent";

function ProductDetails() {

  const {id} = useParams();

  const quality = useSelector((state)=>state.cart).filter((item)=>item.id===parseInt(id));

  console.log(quality);
  
  const data = product().filter((item)=>item.id===parseInt(id));
  const [count, setCount] = useState(quality.length=== 0 ?  data[0].quality : quality[0].quality);

  // data[0].quality
  return (
    <div className="product-details">
      <div className="container">
        <h1 className="title">Product details</h1>
        <div className="detail-con">
          <div className="img">
            <img src={data[0].img} alt="" />
          </div>

          <div className="detail">
            <div className="name">{data[0].name}</div>
            <div className="pice">{data[0].pice}</div>

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
              {/* <button className="add-cart">Add to cart</button> */}
              <AddBtnComponent data={data[0]}/>
              <button className="buy">Buy</button>
            </div>
            <div className="description">
              <h1>Product details</h1>

              {data[0].detail.map((item)=>{
                return (
                  <p key={uuidv4()}>{item}</p>
                );
              })}
              
            </div>
          </div>
        </div>

        <div className="gird-container-img">
          <h1>Picture</h1>
          <div className="grid">
            
          {data[0].picture.map((item)=>{
                return (
                  <div key={uuidv4()}>

                    <img src={item} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
