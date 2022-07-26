import React from "react";
import { useState } from "react";
import CardComponent from "../component/CardComponent";

import {product} from '../assets/dataProducts/index'

function Products(props) {
  const title = props.menu;
  const productProp = product();

  return (
    <div className="product">
      <div className="container">
        <h1 className="title">{title}</h1>
        <input type="text" className="serach" placeholder="Serach" />
        <div className="grid-container">
          {productProp.map((item)=>{
            return (
              <CardComponent top={item} />
            )
          })}
          
          {/* <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
          <CardComponent top={productProp} />
      */}
         
        </div>
      </div>
    </div>
  );
}

export default Products;
