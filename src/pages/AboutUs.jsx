import React, { useState } from 'react';
import Header from '../components/jsx/App/Header';
import AboutBanner1 from '../components/jsx/AboutUs/AboutBanner1';
import SalesBanner1 from '../components/jsx/App/SalesBanner1';
import AboutBanner2 from '../components/jsx/AboutUs/AboutBanner2';
import Footer from '../components/jsx/App/Footer';

const AboutUs = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header show={show} setShow={setShow} />
      {
        show ? ("") : (
          <>
      <AboutBanner1 />
      <SalesBanner1 />
      <AboutBanner2 />
      <Footer />
      </>)}
    </div>
  )
}

export default AboutUs
