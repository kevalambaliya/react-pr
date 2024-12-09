import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../pages/Form.jsx'
import Product from '../pages/Product.jsx'
import Buy from '../pages/Buy.jsx'
import Purchase from '../pages/Purchase.jsx'

const Allrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/buy" element={<Buy/>}/>
      </Routes>
    </div>
  )
}

export default Allrouter
