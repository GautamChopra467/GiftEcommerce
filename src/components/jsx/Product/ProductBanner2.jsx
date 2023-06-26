import React, { useEffect, useState } from "react";
import { TbMathGreater } from "react-icons/tb";
import "../../css/Product/ProductBanner1Styles.css";
import ProductCard2 from "./ProductCard2.jsx";
import { Link, useParams } from "react-router-dom";
import { getProductsByCategory } from "../../../firebaseInstance";

const ProductBanner2 = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsByCategory(category);
        setProducts(productsData);
        console.log(productsData)
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);

  const LowToHigh = () => {
    let products2 = [...products].sort((a, b) => {
      return a.price - b.price;
    });

    setProducts(products2);
  };

  const HighToLow = () => {
    let products2 = [...products].sort((a, b) => {
      return b.price - a.price;
    });

    setProducts(products2);
  };

  return (
    <div className="main_container_productbanner1">
      <div className="sub_header_productbanner1">
        <Link to="/">Home</Link>
        <TbMathGreater className="greater_icon_aboutbanner1" />
        {category ? (
          <Link to={`/products/${category}`}>{category.toUpperCase()}</Link>
        ) : (
          <Link to="/products">Best Selling for Today</Link>
        )}
      </div>
      <div className="categories_main_container_productbanner1">
        <div className="categories_container_productbanner1">
          <div className="categories_top_section_productbanner1">
            {category ? (
              <h4>{category.toUpperCase()}</h4>
            ) : (
              <h4> Best Selling for Today</h4>
            )}
          </div>

          <div className="categories_bottom_section_productbanner1">
            <p>Sort By : </p>
            <div className="categories_box_productbanner1">
              <div className="categories_box_productbanner1">
                <div className="category_box_productbanner1">
                  <p>New</p>
                </div>
              </div>

              <div className="categories_box_productbanner1">
                <div className="category_box_productbanner1">
                  <p onClick={HighToLow}>Price: High-Low</p>
                </div>
              </div>

              <div className="categories_box_productbanner1">
                <div className="category_box_productbanner1">
                  <p onClick={LowToHigh}>Price: Low-High</p>
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
