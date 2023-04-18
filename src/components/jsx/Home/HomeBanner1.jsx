import React from 'react';
import "../../css/Home/HomeBanner1Styles.css";
import Image1 from "../../../assets/products/home1.png";
import Image2 from "../../../assets/products/home2.png";
import Image3 from "../../../assets/products/home3.png";
import Image4 from "../../../assets/products/home4.png";
import Image5 from "../../../assets/products/home5.png";
import Image6 from "../../../assets/products/home6.png";
import Image7 from "../../../assets/products/home7.png";
import Image8 from "../../../assets/products/home8.png";
import Image9 from "../../../assets/products/home9.png";
import Image10 from "../../../assets/products/home10.png";
import Image11 from "../../../assets/products/home11.png";
import Image12 from "../../../assets/products/home12.png";
import Image13 from "../../../assets/products/home13.png";

const HomeBanner1 = () => {
  return (
    <div>
      <div className='main_container_homebanner1'>
        <div className='top_section_homebanner1'>
          <div className='top_detail_box_homebanner1'>
            <div className='top_detail_left_section_homebanner1'>
              <h4>Delicious Cakes</h4>
              <p>Celebrate Sweet Moments</p>

              <button className='primary_btn_homebanner1'>BUY NOW</button>
            </div>

            <div className='top_detail_right_section_homebanner1'>
              <img src={Image1} alt="gift" />
            </div>
          </div>

          <div className='top_detail_box_homebanner1'>
            <div className='top_detail_left_section_homebanner1'>
              <h4>Fruits & Flowers</h4>
              <p>Inspired by nature’s best</p>

              <button className='primary_btn_homebanner1'>GIFT NOW</button>
            </div>

            <div className='top_detail_right_section_homebanner1'>
              <img src={Image2} alt="gift" />
            </div>
          </div>
        </div>

        <div className='middle1_section_homebanner1'>
          <div className='middle1_detail_box_homebanner1'>
            <div className='middle1_detail_upper_section_homebanner1'>
              <h4>Gift Items</h4>
              <p>Send this to someone you love</p>
            </div>

            <div className='middle1_detail_lower_section1_homebanner1'>
              <img src={Image3} alt="product" />
            </div>
          </div>

          <div className='middle1_detail_box_homebanner1'>
            <div className='middle1_detail_upper_section_homebanner1'>
              <h4>Birthday Bash Gifts</h4>
              <p>Birthday Bash</p>
            </div>

            <div className='middle1_detail_lower_section2_homebanner1'>
              <img src={Image4} alt="product" />
            </div>
          </div>

          <div className='middle1_detail_box_homebanner1'>
            <div className='middle1_detail_upper_section_homebanner1'>
              <h4>Customised Goodies</h4>
              <p>Send this to someone you love</p>
            </div>

            <div className='middle1_detail_lower_section3_homebanner1'>
              <img src={Image5} alt="product" />
            </div>
          </div>

          <div className='middle1_detail_box_homebanner1'>
            <div className='middle1_detail_upper_section_homebanner1'>
              <h4>Vocal for Local</h4>
              <p>Shop by Local</p>
            </div>

            <div className='middle1_detail_lower_section4_homebanner1'>
              <img src={Image6} alt="product" />
            </div>
          </div>
        </div>

        <div className='middle2_section_homebanner1'>
          <h4>Celebrate Occasions with Scale : Your Genuine Place to Shop</h4>
          <p>Thoughtfully curated 139,821 Gift Ideas. Get 2-Hour Delivery & Free Shipping in India.</p>
        </div>

        <div className='bottom_section_homebanner1'>
          <div className='bottom_first_section_homebanner1'>
            <h4>Thoughtfully Curated Gifts</h4>
          </div>

          <div className='bottom_second_section_homebanner1'>
            <div className='top_detail_box_homebanner1'>
            <div className='top_detail_left_section_homebanner1'>
              <h4>Anniversary Gifts</h4>
              <p>Celebrate Your Journey of Love</p>

              <button className='primary_btn_homebanner1'>BUY NOW</button>
            </div>

            <div className='top_detail_right_section_homebanner1'>
              <img src={Image7} alt="gift" />
            </div>
            </div>

            <div className='top_detail_box_homebanner1'>
            <div className='top_detail_left_section_homebanner1'>
              <h4>Convey Best Wishes</h4>
              <p>Wish them success & happiness</p>

              <button className='primary_btn_homebanner1'>SEND NOW</button>
            </div>

            <div className='top_detail_right_section_homebanner1'>
              <img src={Image8} alt="gift" />
            </div>
          </div>
          </div>

          <div className='bottom_third_section_homebanner1'>
            <div className='bottom_third_detail_box_homebanner1'>
              <div className='bottom_third_detail_image_box_homebanner1'>
              <img src={Image9} alt="product" /></div>
              <p>Gift your little ones loads of smiles with Special Birthday Cakes for Kids</p>
            </div>

            <div className='bottom_third_detail_box_homebanner1'>
            <div className='bottom_third_detail_image_box_homebanner1'><img src={Image10} alt="product" /></div>
              <p>Add a delish twist to your surprise with artistic Choco Bouquets</p>
            </div>

            <div className='bottom_third_detail_box_homebanner1'>
            <div className='bottom_third_detail_image_box_homebanner1'><img src={Image11} alt="product" /></div>
              <p>Magnify their joy & excitement with our attractive Gift Hampers</p>
            </div>

            <div className='bottom_third_detail_box_homebanner1'>
            <div className='bottom_third_detail_image_box_homebanner1'><img src={Image12} alt="product" /></div>
              <p>Brighten up their day by surprising them with Exotic Flowers</p>
            </div>

            <div className='bottom_third_detail_box_homebanner1'>
            <div className='bottom_third_detail_image_box_homebanner1'><img src={Image13} alt="product" /></div>
              <p>Find meaningful & thoughtful gifts from our Curated Collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner1
