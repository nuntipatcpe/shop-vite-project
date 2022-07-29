import React from 'react'
import{useDispatch} from 'react-redux'
import {addToCart}from '../../store/slices/cartSlice'


function AddBtnComponent(props) {
    const dispatch = useDispatch();
    const addData ={
      ...props.data,
      quality: props.data.quality + parseInt(props.num)
    }
  return (
    <button className="add-cart" onClick={()=>dispatch(addToCart(addData))}>Add to cart</button>
  )
}

export default AddBtnComponent