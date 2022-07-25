import React from "react";

import img from '../assets/img/bg-2.png'

import CardComponent from "../component/CardComponent";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Home() {
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
           <CardComponent/>
        
            <h1>2st</h1>
            <CardComponent/>

            <h1>3st</h1>
            <CardComponent/>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
