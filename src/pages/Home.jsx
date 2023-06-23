import React, { useEffect, useState } from "react";
import Header from "../components/jsx/App/Header";
import HomeBanner1 from "../components/jsx/Home/HomeBanner1";
import SalesBanner1 from "../components/jsx/App/SalesBanner1";
import SalesBanner2 from "../components/jsx/App/SalesBanner2.jsx";
import AboutBanner2 from "../components/jsx/AboutUs/AboutBanner2";
import Footer from "../components/jsx/App/Footer";
import ProductCard4 from "../components/jsx/Product/ProductCad4";
import {getProducts} from "../firebaseInstance";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchProducts();
  }, []);
  

  const [show, setShow] = useState(false);

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Header show={show} setShow={setShow} />
      {show ? (
        ""
      ) : (
        <>
          <HomeBanner1 />
          <SalesBanner1 />
          <ProductCard4 products={products} />
          <SalesBanner2 />
          <div style={{ height: "60px" }}></div>
          <AboutBanner2 />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
