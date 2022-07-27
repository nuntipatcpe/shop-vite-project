import React, { useState } from "react";

import DeleteBtn from "../Button/DeleteBtn";
import { increase ,deleteCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

function ListProduct(props) {
  const dispatch = useDispatch();
  const data = props.data;
  const [count, setCount] = useState(data.quality);

  const inc = {
    ...data,
    quality:count+1
  };
  const dec = {
    ...data,
    quality:count-1
  };

  const setItem = (x) => {
    setCount(count + x);
    if(x<=0){
      dispatch(increase(dec));
    }else{
      dispatch(increase(inc));
    }
  };
  
  return (
    <div className="product-items">
      <img src={data.img} alt="" />
      <div className="name">{data.name}</div>
      <div className="pice">{data.pice * count}</div>
      <div className="num">
        <button
          className="decrease"
          onClick={() => {
            setItem(-1);
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="increase"
          onClick={() => {
            setItem(1);
          }}
        >
          +
        </button>
      </div>
      <DeleteBtn id={data.id} />
    </div>
  );
}

export default ListProduct;
