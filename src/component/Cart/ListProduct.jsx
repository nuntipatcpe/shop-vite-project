import React,{useState} from "react";

function ListProduct(props) {
    const data = props.data;
    const [count, setCount] = useState(data.num);
  return (
    <div className="product-items">
      <img src="/src/assets/img/bg-2.png" alt="" />
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
      <button className="delete-btn">Delete</button>
    </div>
  );
}

export default ListProduct;
