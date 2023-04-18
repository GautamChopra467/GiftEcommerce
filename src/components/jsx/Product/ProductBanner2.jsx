import React from "react";
import { TbMathGreater } from "react-icons/tb";
import "../../css/Product/ProductBanner1Styles.css";
import ProductCard2 from "./ProductCard2.jsx";
import { Link } from "react-router-dom";
import Product1 from "../../../assets/products/products1.png";
import Product2 from "../../../assets/products/products2.png";
import Product3 from "../../../assets/products/products3.png";
import Product4 from "../../../assets/products/products4.png";
import Product5 from "../../../assets/products/products5.png";
import Product6 from "../../../assets/products/products5.png";
import Product7 from "../../../assets/products/products5.png";
import Product8 from "../../../assets/products/products8.png";
import Product9 from "../../../assets/products/products9.png";
import Product10 from "../../../assets/products/products10.png";
import Product11 from "../../../assets/products/products11.png";
import Product12 from "../../../assets/products/products12.png";
import Product13 from "../../../assets/products/products13.png";
import Product14 from "../../../assets/products/products14.png";
import Product15 from "../../../assets/products/products15.png";
import Product16 from "../../../assets/products/products16.png";

const ProductBanner2 = () => {
  const products = [
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product1,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product2,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product3,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product4,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product5,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product6,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product7,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product8,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product9,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product10,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product11,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product12,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product13,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product14,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product15,
      price: 1299,
    },
    {
      name: "Gleaming Love Orchid Bouqet",
      image: Product16,
      price: 1299,
    },
  ];

  return (
    <div className="main_container_productbanner1">
      <div className="sub_header_productbanner1">
      <Link to="/">Home</Link>
          <TbMathGreater className="greater_icon_aboutbanner1" />
          <Link to="/products">Best Selling for Today</Link>
      </div>

      <div className="categories_main_container_productbanner1">
        <div className="categories_container_productbanner1">
          <div className="categories_top_section_productbanner1">
            <h4>Best Selling for Today</h4>
          </div>

          <div className="categories_bottom_section_productbanner1">
            <p>Sort By : </p>
            <div className="categories_box_productbanner1">
              <div className="category_box_productbanner1 active_box_productbanner1">
                <p>Recommended</p>
              </div>

              <div className="categories_box_productbanner1">
                <div className="category_box_productbanner1">
                  <p>New</p>
                </div>
              </div>

              <div className="categories_box_productbanner1">
                <div className="category_box_productbanner1">
                  <p>Price: High-Low</p>
                </div>
              </div>

              <div className="categories_box_productbanner1">
                <div className="category_box_productbanner1">
                  <p>Price: Low-High</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductCard2 products={products} />
    </div>
  );
};

export default ProductBanner2;
