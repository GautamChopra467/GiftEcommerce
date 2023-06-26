import React, { useState } from "react";
import Header from "../components/jsx/App/Header";
import ProductBanner2 from "../components/jsx/Product/ProductBanner2.jsx";
import SalesBanner1 from "../components/jsx/App/SalesBanner1";
import AboutBanner2 from "../components/jsx/AboutUs/AboutBanner2";
import Footer from "../components/jsx/App/Footer";

const Products = () => {
  return (
    <div>
      <Header />
      <ProductBanner2 />
      <SalesBanner1 />
      <AboutBanner2 />
      <Footer />
    </div>
  );
};

export default Products;
