import React from "react";


import {product} from '../assets/dataProducts/index'


import CardComponent from "../component/CardComponent";

import {  Link } from "react-router-dom";

function Home() {
  const data = product().map(item=>item).sort((a, b)=>{return b.popular - a.popular });

  return (
    <div className="home">
      <div className="container">
        <div className="background">
          <div className="img">  
            <h1>Grow Shop</h1>
            <Link to="/products" className="btn-product"> Products</Link>
            {/* <button>Products</button> */}
          </div>
        </div>
        <div className="top">

          
          <h1>Top3</h1>
          <div className="card-con">    
            <h1>1st</h1>
           <CardComponent top ={data[0] }/>
            <h1>2st</h1>
            <CardComponent top = {data[1]}/>
            <h1>3st</h1>
            <CardComponent top = {data[2]}/>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
