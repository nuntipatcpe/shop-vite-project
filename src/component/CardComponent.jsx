import React from "react";
import{Link}from 'react-router-dom'

import{useDispatch} from 'react-redux'
import {addToCart}from '../slices/cartSlice'

import AddBtn from "./Button/AddBtn";

function CardComponent(props) {


  const dispatch = useDispatch();
  return (
      <div className="card">
        <Link to={`/details${props.top.id}`} className="img"></Link>
        <img src={props.top.img} alt="img"/> 
        <div className="topic">{props.top.name}</div>
        <div className="pice">
          <p>{props.top.pice}</p>
          </div> 
        
         <div className="btn">
          {/* <button className="add-cart" onClick={()=>dispatch(addToCart(props.top))}>Add to cart</button> */}
          <AddBtn data ={props.top} num={0}/>
          <button className="buy">Buy</button>
        </div>
      </div>
  
  );
}

export default CardComponent;
