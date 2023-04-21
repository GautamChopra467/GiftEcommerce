import React from "react";
import "../../css/Product/ProductCard3Styles.css";
import { Link } from "react-router-dom";

const ProductCard3 = ({ products }) => {
  return (
    <div className="product_list_main_container_productcard3">
      <div className="product_list_container_productcard3">
        {products.map((product) => (
          <Link to={`/product/${product.docId}`} className="product_container_productcard3">
            {product && (
              <img src={product.imgUrl[0]} alt="product" />
            )}
            

            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard3;
