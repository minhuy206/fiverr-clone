import React from "react";
import Cate1 from "./../../../assets/imgs/cate1.jpg";
import Cate2 from "./../../../assets/imgs/cate2.jpg";
import Cate3 from "./../../../assets/imgs/cate3.jpg";
import Cate4 from "./../../../assets/imgs/cate4.jpg";
import Cate5 from "./../../../assets/imgs/cate5.jpg";
import Cate6 from "./../../../assets/imgs/cate6.jpg";
import Cate7 from "./../../../assets/imgs/cate7.jpg";
import Cate8 from "./../../../assets/imgs/cate8.jpg";
import Cate9 from "./../../../assets/imgs/cate9.jpg";
import Cate10 from "./../../../assets/imgs/cate10.jpg";
import { useNavigate } from "react-router-dom";
export default function Categories() {
  const naviget = useNavigate();
  return (
    <div className=" grid grid-cols-5 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5     gap-10 py-24 px-8 mx-14 text-center">
      <div onClick={() => naviget("categories/1")} className="cursor-pointer">
        <img src={Cate1} alt="" className="h-14 mx-auto hover:border-b-2" />

        <p className="py-5"> Graphics & Design</p>
      </div>
      <div onClick={() => naviget("categories/2")} className="cursor-pointer">
        <img
          src={Cate2}
          alt=""
          className="h-14 mx-auto relative hover:border-b-2"
        />
        <p className="py-5"> Digital Marketing</p>
      </div>
      <div onClick={() => naviget("categories/3")} className="cursor-pointer">
        <img src={Cate3} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Writing & Translation</p>
      </div>
      <div onClick={() => naviget("categories/4")} className="cursor-pointer">
        <img src={Cate4} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Video & Animation</p>
      </div>
      <div onClick={() => naviget("categories/5")} className="cursor-pointer">
        <img src={Cate5} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Music & Audio</p>
      </div>
      <div onClick={() => naviget("categories/306")} className="cursor-pointer">
        <img src={Cate6} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Programming & Tech</p>
      </div>
      <div onClick={() => naviget("categories/26")} className="cursor-pointer">
        <img src={Cate7} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Business</p>
      </div>
      <div onClick={() => naviget("categories/114")} className="cursor-pointer">
        <img src={Cate8} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Lifestyle</p>
      </div>
      <div onClick={() => naviget("categories/275")} className="cursor-pointer">
        <img src={Cate9} alt="" className="h-14  mx-auto hover:border-b-2" />
        <p className="py-5"> Data</p>
      </div>
      <div onClick={() => naviget("categories/20")} className="cursor-pointer">
        <img src={Cate10} alt="" className="h-14 mx-auto hover:border-b-2" />
        <p className="py-5"> Photography</p>
      </div>
    </div>
  );
}
