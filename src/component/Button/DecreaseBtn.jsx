import React from 'react'

import{useDispatch} from 'react-redux'
import {addToCart}from '../slices/cartSlice'


function DecreaseBtnComponent() {
    const dispatch = useDispatch();
  return (
    <button className="add-cart" onClick={()=>dispatch(addToCart(props.top))}>Add to cart</button>
  )
}

export default DecreaseBtnComponent