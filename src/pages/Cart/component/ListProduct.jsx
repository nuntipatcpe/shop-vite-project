import React, { useState } from "react";

import DeleteBtn from "../../../component/Button/DeleteBtn";
import { increase ,deleteCart } from "../../../slices/cartSlice";
import { useDispatch } from "react-redux";

function ListProduct(props) {
  const dispatch = useDispatch();
  const data = props.data;
  const [count, setCount] = useState(data.quality);

  const setItem = (x) => {
    let dataInc =[data.id,count+x];
    setCount(count + x);
    if(x<=0){
      dispatch(increase(dataInc));
      if(count===1){
        dispatch(deleteCart(data.id));
      }
    }else{
      dispatch(increase(dataInc));
    }
  };
  
  return (
    <div className="product-items">
      <div className="img"></div>
      <img src={data.img} alt="" />
      <div className="name">{data.name}</div>
      <div className="pice">{data.pice * count}$</div>
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
