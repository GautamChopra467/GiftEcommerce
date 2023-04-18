import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaRegUserCircle, FaTimes, FaUsers } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../css/App/HeaderStyles.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="main_container_header">
      <div className="main_box_header">
        {/* DESKTOP HEADER */}
        <div className="desktop_header">
          <div className="desk_top_section_header">
            <div className="desk_top_left_section_header">
              <h2>SCALE</h2>
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
              <Link to="/">Home</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/contactus">Contact</Link>
            </div>
          </div>

          <div className="desk_bottom_section_header">
            <div className="desk_bottom_left_section_header">
              <Link to="/">Birthday</Link>
              <Link to="/">Anniversary</Link>
              <Link to="/">Cakes</Link>
              <Link to="/">Flowers</Link>
              <Link to="/">Personalised</Link>
              <Link to="/">Gifts</Link>
            </div>

            <div className="desk_bottom_right_section_header">
              <div className="desk_cart_container_header">
                <AiOutlineShoppingCart className="desk_cart_icon_header" />
                <p>Cart</p>
              </div>
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
                <div className="mob_cart_container_header">
                  <AiOutlineShoppingCart className="mob_cart_icon_header" />
                  <p>Cart</p>
                </div>
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
              <Link to="/" className="side_middle_box_header">
                <p>Home</p>
                <BiHome className="side_middle_icon_header" />
              </Link>
              <Link to="/aboutus" className="side_middle_box_header">
                <p>About Us</p>
                <FaUsers className="side_middle_icon_header" />
              </Link>
              <Link to="/contactus" className="side_middle_box_header">
                <p>Contact Us</p>
                <RiContactsBook2Line className="side_middle_icon_header" />
              </Link>
            </div>

            <div className="side_bottom_section_header">
              <Link to="/" className="side_bottom_box_header">
                <p>Birthday</p>
              </Link>
              <Link to="/" className="side_bottom_box_header">
                <p>Anniversary</p>
              </Link>
              <Link to="/" className="side_bottom_box_header">
                <p>Cakes</p>
              </Link>
              <Link to="/" className="side_bottom_box_header">
                <p>Flowers</p>
              </Link>
              <Link to="/" className="side_bottom_box_header">
                <p>Personalised</p>
              </Link>
              <Link to="/" className="side_bottom_box_header">
                <p>Gifts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
