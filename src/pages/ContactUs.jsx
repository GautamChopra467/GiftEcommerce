import React, { useState } from 'react'
import Header from '../components/jsx/App/Header'
import SalesBanner1 from '../components/jsx/App/SalesBanner1'
import ContactBanner1 from '../components/jsx/ContactUs/ContactBanner1';
import ContactBanner2 from '../components/jsx/ContactUs/ContactBanner2';
import AboutBanner2 from "../components/jsx/AboutUs/AboutBanner2";
import Footer from '../components/jsx/App/Footer'

const ContactUs = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header show={show} setShow={setShow} />
      {
        show ? ("") : (
          <>
      <ContactBanner1 />
      <ContactBanner2 />
      <SalesBanner1 />
      <AboutBanner2 />
      <Footer />
      </>)}
    </div>
  )
}

export default ContactUs
