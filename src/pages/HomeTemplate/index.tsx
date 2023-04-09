import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../../_components/Home/Header";
import Footer from "../../_components/Home/Footer";

const { Content } = Layout;

const HomeTemplate: React.FC = () => {
  return (
    <Layout className="layout">
      <>
        <Header />
      </>
      <Content>
        <div className="site-layout-content bg-white">
          <Outlet />
        </div>
      </Content>
      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default HomeTemplate;
