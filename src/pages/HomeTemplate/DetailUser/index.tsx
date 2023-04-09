import React from "react";
import { Layout, Space } from "antd";
import Side from "./Side";
const { Header, Footer, Sider, Content } = Layout;
export default function DetailUser() {
  return (
    <>
      <Layout>
        <Layout>
          <Sider
            className="pt-5 pb-10 px-1 ml-14 mr-10 "
            style={{ background: "white" }}
          >
            <Side />
          </Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </>
  );
}
