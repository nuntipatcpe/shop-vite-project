import React from 'react'
import{useDispatch}from 'react-redux'

import {deleteCart}from '../../slices/cartSlice'

function DeleteBtn(props) {
    // console.log(props.id);
    const dispatch = useDispatch();
  return (
    <button className="delete-btn" onClick={()=>dispatch(deleteCart(props.id))}>Delete</button>
  )
}

export default DeleteBtn