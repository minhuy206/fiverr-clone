import React from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Featured from "../../components/featured";
import Logo from "../../components/logo";
import Caroulsel from "../../components/Carousel";
import Content from "../../components/Content";
import Comment from "../../components/Comment";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

// const { Header, Content, Footer } = Layout;

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
