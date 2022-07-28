import { useState } from 'react'
// import './App.css'

import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  const [aut, setAut] = useState(true)

// if(aut){
//   return (
//     <Router>
//         <Navbar/>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/details:id' element={<ProductDetails/>} />
//         </Routes>
//       </Router>
//   )

// }

  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products menu={'All'}/>} />
          <Route path='/Products/seed' element={<Products menu={'seed'}/>} />
          <Route path='/Products/tools' element={<Products menu={'tools'}/>} />
          <Route path='/details:id' element={<ProductDetails/>} />
          <Route path='/tools' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
