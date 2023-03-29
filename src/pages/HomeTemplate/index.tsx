import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const HomeTemplate: React.FC = () => {
  return (
    <Layout className="layout">
      <header></header>
      <Content>
        <div className="site-layout-content bg-white">
          <Outlet />
        </div>
      </Content>
      <footer></footer>
    </Layout>
  );
};

export default HomeTemplate;
