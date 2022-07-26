import React from "react";
import { useState } from "react";
import CardComponent from "../component/CardComponent";

function Products(props) {
  const productProp = props.menu;
  return (
    <div className="product">
      <div className="container">
        <h1 className="title">{productProp}</h1>
        <input type="text" className="serach" placeholder="Serach" />
        <div className="grid-container">
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
          <CardComponent item={productProp} />
         
        </div>
      </div>
    </div>
  );
}

export default Products;
