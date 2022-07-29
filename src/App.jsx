import { useState } from 'react'
// import './App.css'

import Navbar from './layout/Navbar'
import Home from './pages/Home/Home'
import AllProducts from './pages/AllProducts/AllProducts'
import ProductDetails from './pages/ProductDelails/ProductDetails'
import Cart from './pages/Cart/Cart'

import Login from './pages/Login/Login' 
import SingUp from './pages/SingUp/SingUp' 
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/allProducts' element={<AllProducts/>} />
          <Route path='/allProducts/:type' element={<AllProducts/>} />
          <Route path='/details:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/singup' element={<SingUp/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
