import React from "react";
import { TbMathGreater, TbMoodSmileDizzy } from "react-icons/tb";
import "../../css/Product/ProductBanner1Styles.css";
import Item1 from "../../../assets/products/item1.png";
import Item2 from "../../../assets/products/item2.png";
import Item3 from "../../../assets/products/item3.png";
import Item4 from "../../../assets/products/item4.png";
import MainItem from "../../../assets/products/mainitem.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import Product1 from "../../../assets/products/product1.png";
import Product2 from "../../../assets/products/product2.png";
import Product3 from "../../../assets/products/product3.png";
import Product4 from "../../../assets/products/product4.png";
import Product5 from "../../../assets/products/product5.png";
import ProductCard1 from "./ProductCard1.jsx"
import { Link } from "react-router-dom";

const ProductBanner1 = () => {
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
        <div className="product_container_productbanner1">
            <div className="product_image_section_productbanner1">
            <div className="product_first_section_productbanner1">
                <img src={Item1} alt="item" />
                <img src={Item2} alt="item" />
                <img src={Item3} alt="item" />
                <img src={Item4} alt="item" />
            </div>

            <div className="product_second_section_productbanner1">
                <img src={MainItem} alt="mainitem" />
            </div>
            </div>

            <div className="product_third_section_productbanner1">
                <div className="product_third_top_section_productbanner1">
                    <div className="product_third_section_top_upper_productbanner1">
                        <h4>Best Selling  for Today</h4>
                        <AiOutlineHeart className="heart_icon_productbanner1" />
                    </div>

                    <div className="product_third_section_top_middle_productbanner1">
                        <p>Luxury brands are typically associated with high quality, prestige, exclusivity, and status. They command premium prices and offer a unique experience to their customers. Here are some reasons why luxury brands are special and how they maintain defensibility in the market:</p>
                    </div>

                    <div className="product_third_section_top_lower_productbanner1">
                        <div className="rating_box_productbanner1">
                            <h6>4.5</h6>
                        </div>
                        <p>1954 Reviews</p>
                    </div>
                </div>

                <div className="product_third_middle1_section_productbanner1">
                    <div className="product_third_middle1_upper_section_productbanner1">
                        <p>&#x20B9;</p>
                        <div className="product_third_price_section_productbanner1">
                            <h4>1699</h4>
                            <p>inclusive of all taxes</p>
                        </div>
                        <h5><s>&#x20B9;2899</s></h5>
                        <h6>(30 % OFF)</h6>
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

                <div className="product_third_middle2_section_productbanner1">
                    <div className="product_third_middle2_upper_section_productbanner1">
                        <img src={Item4} alt="item" />
                        <p>1/2 Kg</p>
                    </div>

                    <div className="product_third_middle2_upper_section_productbanner1">
                        <img src={Item2} alt="item" />
                        <p>1 Kg</p>
                    </div>
                </div>

                <div className="product_third_bottom_section_productbanner1">
                    <button className="primary_btn_productbanner1">ADD TO CART</button>
                    <button className="secondary_btn_productbanner1">BUY NOW</button>
                </div>
            </div>
        </div>
      </div>
      
      <div className="description_main_container_productbanner1">
        <div className="description_container_productbanner1">
            <div className="description_top_section_productbanner1">
                <h4>Description</h4>
                <div className="line_productbanner1"></div>
                <p>Luxury brands are typically associated with high quality, prestige, exclusivity, and status. They command premium prices and offer a unique experience to their customers. Here are some reasons why luxury brands are special and how they maintain defensibility in the market:
                    Luxury brands are typically associated with high quality, prestige, exclusivity, and status. They command premium prices and offer a unique experience to their customers. Here are some reasons why luxury brands are special and how they maintain defensibility in the market:</p>
                <ul>
                    <li>Cake Flavour- Truffle</li>
                    <li>Weight- Half Kg</li>
                    <li>Shape- Round</li>
                    <li>Serves- 4-6 People</li>
                    <li>Size- 6 inches in Diameter</li>
                </ul>
            </div>

            <div className="description_top_section_productbanner1">
                <h4>Delivery Information</h4>
                <div className="line_productbanner1"></div>
                <ul>
                    <li>Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.</li>
                    <li>The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.</li>
                    <li>Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to any other address.</li>
                    <li>This product is hand delivered and will not be delivered along with courier products.</li>
                    <li>Occasionally, substitutions of flavours/designs is necessary due to temporary and/or regional unavailability issues</li>
                </ul>
            </div>

            <div className="description_top_section_productbanner1">
                <h4>Care Instructions</h4>
                <div className="line_productbanner1"></div>
                <ul>
                    <li>Store cream cakes in a refrigerator. Fondant cakes should be stored in an air conditioned environment.</li>
                    <li>Slice and serve the cake at room temperature and make sure it is not exposed to heat.</li>
                    <li>Use a serrated knife to cut a fondant cake.</li>
                    <li>Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.</li>
                    <li>Please check the placement of these items before serving to small children.</li>
                    <li>The cake should be consumed within 24 hours.</li>
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
                    <p>FNP (Ferns N Petals) is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all specia</p>
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
                    <p>I checked with pigeon it is available at their customer service centre for Rs 700/-</p>
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
                    <p>Purchased first machine for coffee ☕, it's so nice experience, very easy to operate, very compact in size, easy to pour water as well coffee powder, and hardly took 6 minutes to prepared brew coffee, actuallf</p>
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
                    <p>Correct, I bought this product and replaced twice, three of them not worked. I think they dont even have a QC Test for their product</p>
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

      <ProductCard1 products={products} />
    </div>
  );
};

export default ProductBanner1;
