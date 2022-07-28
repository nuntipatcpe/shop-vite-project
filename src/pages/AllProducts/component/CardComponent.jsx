import React from "react";
import{Link}from 'react-router-dom'
import AddBtn from "../../../component/Button/AddBtn";

function CardComponent(props) {
  const {id,name,img,pice}= props.products;
  const objProduct = props.products;
  
  return (
      <div className="card">
        <Link to={`/details${id}`} className="ling"></Link>
        <div className="con-img">
        <img src={img} alt="img"/> 
        </div>
        <div className="topic">{name}</div>
        <div className="pice">
          <p>${pice}</p>
          </div> 
         <div className="btn">
          <AddBtn data ={objProduct} num={0}/>
          <button className="buy">Buy</button>
        </div>
      </div>
  
  );
}

export default CardComponent;
