import React from 'react'
import{useDispatch} from 'react-redux'
import {addToCart}from '../../slices/cartSlice'


function AddBtnComponent(props) {
    const dispatch = useDispatch();    
  return (
    <button className="add-cart" onClick={()=>dispatch(addToCart(props.data))}>Add to cart</button>
  )
}

export default AddBtnComponent