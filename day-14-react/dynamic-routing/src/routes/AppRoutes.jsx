import React from 'react'
import About from '../pages/About'
import Products from '../pages/Products'
import {Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'


const AppRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/prouctdetails/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
