import React from "react";
import "../../css/Product/ProductCard3Styles.css";

const ProductCard3 = ({ products }) => {
  return (
    <div className="product_list_main_container_productcard3">
      <div className="product_list_container_productcard3">
        {products.map((product) => (
          <div className="product_container_productcard3">
            <img src={product.image} alt="product" />

            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard3;
