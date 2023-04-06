import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg1 from "./../../assets/imgs/1.jpg";
import CarouselImg2 from "./../../assets/imgs/2.png";
import CarouselImg3 from "./../../assets/imgs/3.png";
import CarouselImg4 from "./../../assets/imgs/4.png";
import CarouselImg5 from "./../../assets/imgs/5.jpg";
import CarouselImg6 from "./../../assets/imgs/6.jpg";
import CarouselImg7 from "./../../assets/imgs/7.png";
import CarouselImg8 from "./../../assets/imgs/8.png";
import CarouselImg9 from "./../../assets/imgs/9.png";
import CarouselImg10 from "./../../assets/imgs/10.jpg";
import CarouselImg11 from "./../../assets/imgs/11.jpg";

export default function Caroulsel() {
  const settings = {
    dots: false,
    infinite: true,

    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="mx-16">
      <Slider {...settings}>
        <div className="relative">
          <img src={CarouselImg1} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg2} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg3} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg4} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg5} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg6} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg7} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg8} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg9} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg10} alt="" className="h-72" />
        </div>
        <div>
          <img src={CarouselImg11} alt="" className="h-72" />
        </div>
      </Slider>
    </div>
  );
}
