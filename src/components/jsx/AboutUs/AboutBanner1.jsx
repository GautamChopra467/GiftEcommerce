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
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>

            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
        </div>

        <div className="bottom_section_aboutbanner1">
            <div className="bottom_box_aboutbanner1">
                <img src={About1} alt="about" />
                <h4>Anshul Sachdeva</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About2} alt="about" />
                <h4>Anshul Sachdeva</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About3} alt="about" />
                <h4>Ruchika Enakhiya</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About4} alt="about" />
                <h4>Anshul Sachdeva</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About5} alt="about" />
                <h4>Anshul Sachdeva</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About6} alt="about" />
                <h4>Ruchika Enakhiya</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About7} alt="about" />
                <h4>Anshul Sachdeva</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About8} alt="about" />
                <h4>Anshul Sachdeva</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>

            <div className="bottom_box_aboutbanner1">
                <img src={About9} alt="about" />
                <h4>Ruchika Enakhiya</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner1;
