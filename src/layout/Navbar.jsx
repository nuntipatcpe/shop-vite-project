import React from 'react'

function navbar() {
  return (
    <div className="nav-bar">
        <div className="logo">
            <ul className="menu">
                <h1>SHOP</h1>
                <li className="item"><a href="">Product</a></li>
                <li className="item"><a href="">Blog</a></li>
                <div className="menu-login">
                    <li className="item"><a href="">Log</a></li>
                    <p>/</p>
                    <li className="item"><a href="">Sing-up</a></li>
                </div>
                <div className="cart">cart 0</div>
            </ul>
        </div>
    </div>
  )
}

export default navbar