import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Caroulsel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-16">
      <Slider {...settings}>
        <div>
          <img src="./img/1.png" alt="" className="h-72" />
        </div>
        <div>
          <img src="./img/1.png" alt="" className="h-72" />
        </div>
        <div>
          <img src="./img/1.png" alt="" className="h-72" />
        </div>
        <div>
          <img src="./img/1.png" alt="" className="h-72" />
        </div>
        <div>
          <img src="./img/1.png" alt="" className="h-72" />
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
