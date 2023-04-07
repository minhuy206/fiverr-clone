import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../../_components/Home/Header";
import Featured from "../../_components/Home/featured";
import Logo from "../../_components/Home/logo";
import Caroulsel from "../../_components/Home/Carousel";
import Content from "../../_components/Home/Content";
import Comment from "../../_components/Home/Comment";
import Categories from "../../_components/Home/Categories";
import Footer from "../../_components/Home/Footer";

// const { Content } = Layout;

const HomeTemplate: React.FC = () => {
  return (
    <>
      <>
        <Header />
        {/* <Outlet /> */}
      </>

      <Featured />
      <Logo />
      <Caroulsel />

      <Content />
      <Comment />
      <Categories />
      <Footer />
    </>
  );
};

export default HomeTemplate;
