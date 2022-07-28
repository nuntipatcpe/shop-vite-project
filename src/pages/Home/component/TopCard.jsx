import React from "react";

import { Link } from "react-router-dom";

function TopCard(props) {
  const { id, img, pice, name } = props.top;
  const all = props.top;
  console.log(img);
  return (
    <div className="top-card">
      <Link to={`/details${id}`} className="img-con">
        <img src={img} alt="" />
      </Link>
      <p>{name}</p>
      <p>{pice}$</p>
    </div>
  );
}

export default TopCard;
