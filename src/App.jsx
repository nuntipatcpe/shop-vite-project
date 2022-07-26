import { useState } from 'react'
// import './App.css'

import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState()
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Products/seed' element={<Products menu={'seed'}/>} />
          <Route path='/Products/tools' element={<Products menu={'tools'}/>} />
          <Route path='/details' element={<ProductDetails/>} />
          <Route path='/tools' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
