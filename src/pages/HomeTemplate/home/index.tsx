import React from "react";
import Featured from "../../../_components/Home/featured";
import Logo from "../../../_components/Home/logo";
import Caroulsel from "../../../_components/Home/Carousel";
import Content from "../../../_components/Home/Content";
import Comment from "../../../_components/Home/Comment";
import Categories from "../../../_components/Home/Categories";
export default function Home() {
  return (
    <>
      <Featured />
      <Logo />
      <Caroulsel />
      <Content />
      <Comment />
      <Categories />
    </>
  );
}
