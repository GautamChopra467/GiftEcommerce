import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaRegUserCircle, FaTimes, FaUsers } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../css/App/HeaderStyles.css";
import Logo from "../../../assets/logo.png";
import ProductCard1 from "../Product/ProductCard1";

import Product1 from "../../../assets/products/product1.png";
import Product2 from "../../../assets/products/product2.png";
import Product3 from "../../../assets/products/product3.png";
import Product4 from "../../../assets/products/product4.png";
import Product5 from "../../../assets/products/product5.png";
import jsonFile from "../../../dummyData.json"
import ProductCard4 from "../Product/ProductCad4";

const Header = ({ show, setShow }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


 
const [products, setProducts] = useState([])
// let products = [];

const filterItems = (category) => {
  console.log("Hello")
  handleClick()
  setShow(true);
  const data = jsonFile.Products;
  let products2 = data.filter(function (product) {
    return product.category === category;
  })
  setProducts(products2)
  console.log(products2)
}

// filterItems()
  return (
    <div className="main_container_header">
      <div className="main_box_header">
        {/* DESKTOP HEADER */}
        <div className="desktop_header">
          <div className="desk_top_section_header">
            <div className="desk_top_left_section_header">
              <h2>SCALE</h2>
              {/* <img src={Logo} alt="logo" /> */}
              <div className="desk_search_container_header">
                <input type="text" placeholder="Search..." />
                <div className="search_icon_container_header">
                  <GoSearch className="search_icon_header" />
                </div>
              </div>
              <div className="desk_top_middle_box_header">
                <p>WISHLIST</p>
              </div>
            </div>

            <div className="desk_top_right_section_header">
              <Link to="/" onClick={() => setShow(false)}>Home</Link>
              <Link to="/aboutus" onClick={() => setShow(false)}>About Us</Link>
              <Link to="/contactus" onClick={() => setShow(false)}>Contact</Link>
            </div>
          </div>

          <div className="desk_bottom_section_header">
            <div className="desk_bottom_left_section_header">
              <p onClick={() => filterItems("birthday")}>Birthday</p>
              <p onClick={() => filterItems("anniversary")}>Anniversary</p>
              <p onClick={() => filterItems("cake")}>Cakes</p>
              <p onClick={() => filterItems("flower")}>Flowers</p>
              <p onClick={() => filterItems("personalised")}>Personalised</p>
              <p onClick={() => filterItems("gift")}>Gifts</p>
            </div>

            <div className="desk_bottom_right_section_header">
              <Link to="/paymentportal1" className="desk_cart_container_header">
                <AiOutlineShoppingCart className="desk_cart_icon_header" />
                <p>Cart</p>
              </Link>
              <div className="desk_account_container_header">
                <FaRegUserCircle className="desk_account_icon_header" />
                <p>Account</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE HEADER  */}
        <div className="mobile_header">
          <div className="mobile_box_header">
            <div className="mob_top_section_header">
              <div className="mob_top_left_section_header">
                <FaBars className="nav_icon_header" onClick={handleClick} />
                <h2>SCALE</h2>
              </div>

              <div className="mob_top_right_section_header">
                <Link to="/paymentportal1" className="mob_cart_container_header">
                  <AiOutlineShoppingCart className="mob_cart_icon_header" />
                  <p>Cart</p>
                </Link>
                <div className="mob_account_container_header">
                  <FaRegUserCircle className="mob_account_icon_header" />
                  <p>Account</p>
                </div>
              </div>
            </div>

            <div className="mob_bottom_section_header">
              <div className="mob_search_container_header">
                <input type="text" placeholder="Search..." />
                <div className="mob_search_icon_container_header">
                  <GoSearch className="mob_search_icon_header" />
                </div>
              </div>
            </div>
          </div>

          {/* SIDE SECTION */}
          <div className= {!click ? "mob_side_section_header" : "mob_side_section_header side_active_header"}>
            <div className="side_top_section_header">
              <div className="side_top_upper_section_header">
                <FaTimes className="side_nav_icon_header" onClick={handleClick} />
                <div className="desk_top_middle_box_header">
                  <p>WISHLIST</p>
                </div>
              </div>

              <div className="side_top_lower_section_header">
                <h2>SCALE</h2>
              </div>
            </div>

            <div className="side_middle_section_header">
              <Link to="/" className="side_middle_box_header" onClick={() => setShow(false)}>
                <p>Home</p>
                <BiHome className="side_middle_icon_header" />
              </Link>
              <Link to="/aboutus" className="side_middle_box_header" onClick={() => setShow(false)}>
                <p>About Us</p>
                <FaUsers className="side_middle_icon_header" />
              </Link>
              <Link to="/contactus" className="side_middle_box_header" onClick={() => setShow(false)}>
                <p>Contact Us</p>
                <RiContactsBook2Line className="side_middle_icon_header" />
              </Link>
            </div>

            <div className="side_bottom_section_header">
              <div onClick={() => filterItems("birthday")} className="side_bottom_box_header">
                <p>Birthday</p>
              </div>
              <div onClick={() => filterItems("anniversary")} className="side_bottom_box_header">
                <p>Anniversary</p>
              </div>
              <div onClick={() => filterItems("cake")} className="side_bottom_box_header">
                <p>Cakes</p>
              </div>
              <div onClick={() => filterItems("flower")} className="side_bottom_box_header">
                <p>Flowers</p>
              </div>
              <div onClick={() => filterItems("personalised")} className="side_bottom_box_header">
                <p>Personalised</p>
              </div>
              <div onClick={() => filterItems("gift")} className="side_bottom_box_header">
                <p>Gifts</p>
              </div>
            </div>
          </div>
        </div>

        {
          show  ? (<ProductCard4 products={products} />) : ("")
        }
      </div>
    </div>
  );
};

export default Header;
