import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/scss/main.scss'

import {configureStore} from '@reduxjs/toolkit'
import{Provider}from 'react-redux'
import cartReducer from './slices/cartSlice'
const store = configureStore({
  reducer :{
    cart: cartReducer
  }
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
