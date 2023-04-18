import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ContactUs, AboutUs, PaymentPortal1, PaymentPortal2, SingleProduct, Products } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/paymentportal1' element={<PaymentPortal1 />} />
        <Route path='/paymentportal2' element={<PaymentPortal2 />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
