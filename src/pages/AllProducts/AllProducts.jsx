import React from "react";
import CardComponent from "./component/CardComponent";

import {product} from '../../assets/ListProducts/index'
import{useParams} from 'react-router-dom'

function AllProducts() {
  const {type} = useParams();
  const productProp = product();
  let productFilter = productProp;
  if(type.toLowerCase()!=='all'){
     productFilter = productProp.filter((item)=>item.type === type.toLowerCase());
  }
  return (
    <div className="all-product">
      <div className="container">

        <h1 className="title">{type}</h1>
        <input type="text" className="serach" placeholder="Serach" />
        <div className="grid-container">
          {productFilter.map((item)=>{
            return (
              <div key={item.id}>
                <CardComponent products={item} />
              </div>             
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
