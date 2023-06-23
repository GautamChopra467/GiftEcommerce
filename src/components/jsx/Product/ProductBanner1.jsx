import React, { useEffect, useState } from "react";
import { TbMathGreater, TbMoodSmileDizzy } from "react-icons/tb";
import "../../css/Product/ProductBanner1Styles.css";
import Item1 from "../../../assets/products/item1.png";
import Item2 from "../../../assets/products/item2.png";
import Item3 from "../../../assets/products/item3.png";
import Item4 from "../../../assets/products/item4.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard4 from "./ProductCad4";
import { getProducts, getProductById } from "../../../firebaseInstance";
import dummyData from "../../../dummyData.json";

const ProductBanner1 = ({ id }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(dummyData["Products"][0]);
  console.log(product);
  useEffect(() => {
    console.log(id);
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    async function fetchProductById() {
      try {
        const product = await getProductById(id);
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductById();
    fetchProducts();
  }, []);

  return (
    <div className="main_container_productbanner1">
      <div className="sub_header_productbanner1">
        <Link to="/">Home</Link>
        <TbMathGreater className="greater_icon_aboutbanner1" />
        <Link to="/product">Best Selling for Today</Link>
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

      <div className="product_main_container_productbanner1">
        {product && (
          <div className="product_container_productbanner1">
            <div className="product_image_section_productbanner1">
              <div className="product_first_section_productbanner1">
                <img src={product.imgUrl[0]} alt="item" />
                <img src={product.imgUrl[0]} alt="item" />
                <img src={product.imgUrl[0]} alt="item" />
                <img src={product.imgUrl[0]} alt="item" />
              </div>

              <div className="product_second_section_productbanner1">
                {product.imgUrl && (
                  <img src={product.imgUrl[0]} alt="mainitem" />
                )}
              </div>
            </div>

            <div className="product_third_section_productbanner1">
              <div className="product_third_top_section_productbanner1">
                <div className="product_third_section_top_upper_productbanner1">
                  <h4>{product.name}</h4>
                  <AiOutlineHeart className="heart_icon_productbanner1" />
                </div>

                <div className="product_third_section_top_middle_productbanner1">
                  <p>{product.description}</p>
                </div>

                <div className="product_third_section_top_lower_productbanner1">
                  <div className="rating_box_productbanner1">
                    <h6>{product.rating}</h6>
                  </div>
                  <p>{product.reviews_no}</p>
                </div>
              </div>

              <div className="product_third_middle1_section_productbanner1">
                <div className="product_third_middle1_upper_section_productbanner1">
                  <p>&#x20B9;</p>
                  <div className="product_third_price_section_productbanner1">
                    <h4>{product.price}</h4>
                    <p>inclusive of all taxes</p>
                  </div>
                  <h5>
                    <s>&#x20B9;{product.original_price}</s>
                  </h5>
                  <h6>({product.discount} % OFF)</h6>
                </div>

                <div className="product_third_middle1_lower_section_productbanner1">
                  <div className="product_third_middle1_icon_container_productbanner1">
                    <BiHomeHeart className="product_third_middle1_icon_productbanner1" />
                    <p>100 % Smile Guranteed</p>
                  </div>

                  <div className="product_third_middle1_icon_container_productbanner1">
                    <FaUserShield className="product_third_middle1_icon_productbanner1" />
                    <p>100 % Safe and Secure Payments</p>
                  </div>

                  <div className="product_third_middle1_icon_container_productbanner1">
                    <TbMoodSmileDizzy className="product_third_middle1_icon_productbanner1" />
                    <p>6 Million People Trust Us</p>
                  </div>
                </div>
              </div>

              <div className="product_third_bottom_section_productbanner1">
                <button className="primary_btn_productbanner1">
                  ADD TO CART
                </button>
                <Link
                  to="/paymentportal1"
                  className="secondary_btn_productbanner1"
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="description_main_container_productbanner1">
        <div className="description_container_productbanner1">
          <div className="description_top_section_productbanner1">
            <h4>Description</h4>
            <div className="line_productbanner1"></div>
            <p>{product.description}</p>
          </div>

          <div className="description_top_section_productbanner1">
            <h4>Delivery Information</h4>
            <div className="line_productbanner1"></div>
            <ul>
              {product.delivery_instructions && product.delivery_instructions.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>

          <div className="description_top_section_productbanner1">
            <h4>Care Instructions</h4>
            <div className="line_productbanner1"></div>
            <ul>
              {product.care_instructions && product.care_instructions.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="reviews_container_productbanner1">
        <div className="reviews_top_section_productbanner1">
          <h4>Customer Reviews</h4>
        </div>

        <div className="reviews_bottom_section_productbanner1">
          <div className="review_box_productbanner1">
            <div className="review_left_section_productbanner1">
              <div className="initials_box1_productbanner1">
                <p>N</p>
              </div>
            </div>

            <div className="review_right_section_productbanner1">
              <div>
                <h4>Nithya Menon</h4>
                <p>
                  FNP (Ferns N Petals) is India’s top gifting brand that helps
                  you celebrate special moments by delivering fabulous gifts to
                  your loved ones. You can find thoughtful gifts for all specia
                </p>
              </div>
              <div className="review_right_bottom_section_productbanner1">
                <div className="rating_box_productbanner1">
                  <h6>4.5</h6>
                </div>
                <h3>9/4/2023 , 9:10 pm</h3>
              </div>
            </div>
          </div>

          <div className="review_box_productbanner1">
            <div className="review_left_section_productbanner1">
              <div className="initials_box2_productbanner1">
                <p>N</p>
              </div>
            </div>

            <div className="review_right_section_productbanner1">
              <div>
                <h4>Nithya Menon</h4>
                <p>
                  I checked with pigeon it is available at their customer
                  service centre for Rs 700/-
                </p>
              </div>
              <div className="review_right_bottom_section_productbanner1">
                <div className="rating_box_productbanner1">
                  <h6>4.5</h6>
                </div>
                <h3>9/4/2023 , 9:10 pm</h3>
              </div>
            </div>
          </div>

          <div className="review_box_productbanner1">
            <div className="review_left_section_productbanner1">
              <div className="initials_box3_productbanner1">
                <p>N</p>
              </div>
            </div>

            <div className="review_right_section_productbanner1">
              <div>
                <h4>Nithya Menon</h4>
                <p>
                  Purchased first machine for coffee ☕, it's so nice
                  experience, very easy to operate, very compact in size, easy
                  to pour water as well coffee powder, and hardly took 6 minutes
                  to prepared brew coffee, actuallf
                </p>
              </div>
              <div className="review_right_bottom_section_productbanner1">
                <div className="rating_box_productbanner1">
                  <h6>4.5</h6>
                </div>
                <h3>9/4/2023 , 9:10 pm</h3>
              </div>
            </div>
          </div>

          <div className="review_box_productbanner1">
            <div className="review_left_section_productbanner1">
              <div className="initials_box4_productbanner1">
                <p>N</p>
              </div>
            </div>

            <div className="review_right_section_productbanner1">
              <div>
                <h4>Nithya Menon</h4>
                <p>
                  Correct, I bought this product and replaced twice, three of
                  them not worked. I think they dont even have a QC Test for
                  their product
                </p>
              </div>
              <div className="review_right_bottom_section_productbanner1">
                <div className="rating_box_productbanner1">
                  <h6>4.5</h6>
                </div>
                <h3>9/4/2023 , 9:10 pm</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductCard4 products={products} />
    </div>
  );
};

export default ProductBanner1;
