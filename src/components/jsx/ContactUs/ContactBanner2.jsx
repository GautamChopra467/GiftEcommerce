import React from "react";
import "../../css/ContactUs/ContactBanner2Styles.css";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactBanner2 = () => {
  return (
    <div className="main_container_contactbanner2">
      <div className="left_section_contactbanner2">
        <h2>SCALE</h2>
        <p>leads to your needs</p>
      </div>

      <div className="right_section_contactbanner2">
        <div className="right_upper_section_contactbanner2">
          <p>TIDES, Bio-Incubator, 2nd & 3rd Floor, Multi- activity Center</p>

          <p>Indian Institute of Technology, Roorkee, Uttarakhand, 247667</p>
        </div>

        <div className="right_lower_section_contactbanner2">
          <a href="/">
            <FaFacebookSquare className="social_icon_contactbanner2" />
          </a>
          <a href="/">
            <AiFillInstagram className="social_icon2_contactbanner2" />
          </a>
          <a href="/">
            <FaTwitterSquare className="social_icon_contactbanner2" />
          </a>
          <a href="/">
            <FaLinkedin className="social_icon_contactbanner2" />
          </a>
          <a href="/">
            <FaYoutube className="social_icon2_contactbanner2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner2;
