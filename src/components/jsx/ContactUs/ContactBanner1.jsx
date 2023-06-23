import React from "react";
import { TbMathGreater } from "react-icons/tb";
import "../../css/AboutUs/AboutBanner1Styles.css";
import { Link } from "react-router-dom";

const ContactBanner1 = () => {
  return (
    <div>
      <div className="main_container_aboutbanner1">
        <div className="top_section_aboutbanner1">
        <Link to="/">Home</Link>
          <TbMathGreater className="greater_icon_aboutbanner1" />
          <Link to="/contactus">Contact Us</Link>
        </div>

        <div className="middle_section_aboutbanner1">
          <p>
            The Genuine Scale was founded on 3rd July 2022 by Anshul Sachdeva
            and Ankit Babu on their way back to Jawahar bhawan from library, in
            IIT Roorkee. The idea of Scale is simple yet revolutionary - to
            organise the market of the indigenous products of our country by
            adding innovation to these and thereby "Scale" the local sellers.
          </p>

          <p>
            India is a developing country, we need more India run businesses and
            businesses who support them. We at scale want to make sure Indian
            ethnic indigenous products reach your doorstep without any hassle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner1;
