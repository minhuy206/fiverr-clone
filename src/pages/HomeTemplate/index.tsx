import React from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const HomeTemplate: React.FC = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content>
        <div className="site-layout-content bg-white">
          <Outlet />
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default HomeTemplate;
