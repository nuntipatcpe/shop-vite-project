import React from 'react'
import{useDispatch} from 'react-redux'
import {addToCart}from '../../slices/cartSlice'


function AddBtnComponent(props) {

  // console.log(parseInt(props.num));
  
    const dispatch = useDispatch();
    const addData ={
      ...props.data,
      quality: props.data.quality + parseInt(props.num)
    }
    // console.log(addData);

  return (
    <button className="add-cart" onClick={()=>dispatch(addToCart(addData))}>Add to cart</button>
  )
}

export default AddBtnComponent