import React from "react";
import { Layout, Space } from "antd";
import Side from "./Side";
const { Header, Footer, Sider, Content } = Layout;
export default function DetailUser() {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Content>Content</Content>
        <Sider>
          <Side />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
