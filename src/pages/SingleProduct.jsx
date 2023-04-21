import React from 'react'
import Header from '../components/jsx/App/Header';
import ProductBanner1 from "../components/jsx/Product/ProductBanner1.jsx";
import SalesBanner1 from "../components/jsx/App/SalesBanner1";
import AboutBanner2 from "../components/jsx/AboutUs/AboutBanner2";
import Footer from "../components/jsx/App/Footer";
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

  const {id} = useParams();

  return (
    <div>
      <Header />
      <ProductBanner1 id={id} />
      <SalesBanner1 />
      <AboutBanner2 />
      <Footer />
    </div>
  )
}

export default SingleProduct
