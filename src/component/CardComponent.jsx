import React from "react";
import { useState } from "react";
import img from '../assets/img/bg-2.png'
import img2 from '../assets/img/bg-3.png'

function CardComponent(props) {
  let item = img2;
  if(props.item==='seed'){
    item = img;
  }
  const [count,setCount] = useState(0)
  return (
      <div className="card">
        <img src={item} alt="img" />
        <div className="topic">Cannabis sativa</div>
        <div className="pice">
          <p>$500</p>
          <div className="num">
          <button className="increase" onClick={()=>{setCount(count-1)}}>-</button>  
          <p>{count}</p>  
          <button className="decrease" onClick={()=>{setCount(count+1)}}>+</button>  
          </div> 
          </div>
        
        <div className="btn">
          <button className="add-cart">Add to cart</button>
          <button className="buy">Buy</button>
        </div>
      </div>
  
  );
}

export default CardComponent;
