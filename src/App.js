import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import PaymentPortal1 from "./pages/PaymentPortal1.jsx";
import PaymentPortal2 from "./pages/PaymentPortal2.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Products from "./pages/Products.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/Signup.jsx"
import CartPage from './pages/CartPage.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/paymentportal1' element={<PaymentPortal1 />} />
        <Route path='/paymentportal2' element={<PaymentPortal2 />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
