import React,{useState} from "react";

import DeleteBtn from "../Button/DeleteBtn";

function ListProduct(props) {
    const data = props.data;
    const [count, setCount] = useState(data.quality);

    // const data2 =  {
    //     ...data,
    //     quality: count
    // }
    // console.log(data2);
  return (
    <div className="product-items">
      <img src={data.img} alt="" />
      <div className="name">{data.name}</div>
      <div className="pice">{data.pice}</div>
      <div className="num">
        <button
          className="increase"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="decrease"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
     <DeleteBtn id ={data.id}/>
    </div>
  );
}

export default ListProduct;
