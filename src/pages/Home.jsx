import React from "react";

import img from '../assets/img/bg-2.png'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="background">
          <div className="img">  
            <h1>Grow Shop</h1>
            <button>Products</button>
          </div>
        </div>
        <div className="top">

          
          <h1>Top3</h1>
          <div className="card-con">
          
            <h1>1st</h1>
            <div className="card">
              <img src={img} alt="img" />
              <div className="topic">Cannabis sativa</div>
              <div className="pice">$500</div>
              <div className="btn">
                <button className="add-cart">Add to cart</button>
              <button className="buy">Buy</button>
              </div>
            </div>
        
            <h1>2st</h1>
            <div className="card">
              <img src={img} alt="img" />
              <div className="topic">Cannabis sativa</div>
              <div className="pice">$500</div>
              <div className="btn">
                <button className="add-cart">Add to cart</button>
              <button className="buy">Buy</button>
              </div>
            </div>
        
            <h1>3st</h1>
            <div className="card">
              <img src={img} alt="img" />
              <div className="topic">Cannabis sativa</div>
              <div className="pice">$500</div>
              <div className="btn">
                <button className="add-cart">Add to cart</button>
              <button className="buy">Buy</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
