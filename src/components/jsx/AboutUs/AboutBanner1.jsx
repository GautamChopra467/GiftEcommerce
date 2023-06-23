import React from "react";
import { TbMathGreater } from "react-icons/tb";
import About1 from "../../../assets/about1.png";
import About2 from "../../../assets/about2.png";
import About3 from "../../../assets/about3.png";
import About4 from "../../../assets/about4.png";
import About5 from "../../../assets/about5.png";
import About6 from "../../../assets/about6.png";
import About7 from "../../../assets/about7.png";
import About8 from "../../../assets/about8.png";
import About9 from "../../../assets/about9.png";
import "../../css/AboutUs/AboutBanner1Styles.css";
import { Link } from "react-router-dom";

const AboutBanner1 = () => {
  return (
    <div>
      <div className="main_container_aboutbanner1">
        <div className="top_section_aboutbanner1">
          <Link to="/">Home</Link>
          <TbMathGreater className="greater_icon_aboutbanner1" />
          <Link to="/aboutus">About Us</Link>
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

        <div className="bottom_section_aboutbanner1">
          <div className="bottom_box_aboutbanner1">
            <img src={About1} alt="about" />
            <h4>Anshul Sachdeva</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About2} alt="about" />
            <h4>Ruchika Enakhiya</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About3} alt="about" />
            <h4></h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About4} alt="about" />
            <h4>Muskan Goel</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About5} alt="about" />
            <h4>Sahajpreet Singh</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About6} alt="about" />
            <h4>Raushan Raj</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About7} alt="about" />
            <h4>Kalpesh Gothwal</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About8} alt="about" />
            <h4>Sandal Rana</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About9} alt="about" />
            <h4>Shiva</h4>
          </div>

          <div className="bottom_box_aboutbanner1">
            <img src={About9} alt="about" />
            <h4>Vaibhav</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner1;
