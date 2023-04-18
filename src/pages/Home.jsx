import React from 'react'
import Header from '../components/jsx/App/Header';
import HomeBanner1 from '../components/jsx/Home/HomeBanner1';
import SalesBanner1 from '../components/jsx/App/SalesBanner1';
import SalesBanner2 from '../components/jsx/App/SalesBanner2.jsx';
import ProductCard1 from '../components/jsx/Product/ProductCard1';
import Product1 from "../assets/products/product1.png";
import Product2 from "../assets/products/product2.png";
import Product3 from "../assets/products/product3.png";
import Product4 from "../assets/products/product4.png";
import Product5 from "../assets/products/product5.png";

import Product14 from "../assets/products/home14.png";
import Product15 from "../assets/products/home15.png";
import Product16 from "../assets/products/home16.png";
import Product17 from "../assets/products/home17.png";
import ProductCard3 from '../components/jsx/Product/ProductCard3';
import AboutBanner2 from '../components/jsx/AboutUs/AboutBanner2';
import Footer from '../components/jsx/App/Footer';

const Home = () => {
  const products = [
    {
        id: 1,
        name: "Luxe Love Orchids Bouquet With ",
        image: Product1,
        price: 1299,
    },
    {
        id: 2,
        name: "Luxe Love Orchids Bouquet With ",
        image: Product2,
        price: 1299,
    },
    {
        id: 3,
        name: "Luxe Love Orchids Bouquet With ",
        image: Product3,
        price: 1299,
    },
    {
        id: 4,
        name: "Luxe Love Orchids Bouquet With ",
        image: Product4,
        price: 1299,
    },
    {
        id: 5,
        name: "Luxe Love Orchids Bouquet With ",
        image: Product5,
        price: 1299,
    }
]

const products2 = [
  {
    image: Product14,
    name: "Buns"
  },
  {
    image: Product15,
    name: "Bakery"
  },
  {
    image: Product16,
    name: "Chocolates"
  },
  {
    image: Product17,
    name: "Pie"
  },
]

  return (
    <div style={{backgroundColor: "#f2f2f2"}}>
      <Header />
      <HomeBanner1 />
      <SalesBanner1 />
      <ProductCard1 products={products} />
      <ProductCard1 products={products} />
      <ProductCard3 products={products2} />
      <ProductCard1 products={products} />
      <SalesBanner2 />
      <ProductCard3 products={products2} />
      <ProductCard1 products={products} />
      <div style={{height: "60px"}}></div>
      <AboutBanner2 />
      <Footer />
    </div>
  )
}

export default Home
