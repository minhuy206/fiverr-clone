import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comment1 from "./../../../assets/imgs/cm1.png";
import Comment2 from "./../../../assets/imgs/cm2.png";
import Comment3 from "./../../../assets/imgs/cm3.png";
import Comment4 from "./../../../assets/imgs/cm4.png";

export default function Comment() {
  const settings = {
    dots: false,
    infinite: true,

    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="py-24 px-8 mx-14">
      <Slider {...settings}>
        <div className="relative">
          <img src={Comment1} alt="" className="" />
        </div>
        <div>
          <img src={Comment2} alt="" className="" />
        </div>
        <div>
          <img src={Comment3} alt="" className="" />
        </div>
        <div>
          <img src={Comment4} alt="" className="" />
        </div>
      </Slider>
    </div>
  );
}
