import React from "react";
import Banner from "../../_component/Banner";
import Caroulsel from "../../_component/Carousel";
import Content from "../../_component/Content";
import Featured from "../../_component/featured/Featured";
import Header from "../../_component/Header";
import Logo from "../../_component/logo";

export default function HomePage() {
  return (
    <div className="  ">
      <Header />
      <Featured />
      {/* <Banner /> */}
      <Logo />
      <Caroulsel />
      <Content />
    </div>
  );
}
