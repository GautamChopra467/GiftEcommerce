import React from "react";
import "../../css/Product/ProductCard1Styles.css";

const ProductCard1 = ({ products }) => {
  return (
    <div className="product_list_main_container_productcard1">
      <div className="product_list_container_productcard1">
        {products.map((product) => (
          <div key={product.id} className="main_container_productcard1">
            <div className="top_section_productcard1">
              <img src={product.image} alt="product" />
            </div>

            <div className="bottom_section_productcard1">
              <p>{product.name}</p>
              <h5>&#x20B9; {product.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard1;
