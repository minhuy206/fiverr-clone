import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Home from "./home";

// const { Content } = Layout;

const HomeTemplate: React.FC = () => {
  return <Home />;
};

export default HomeTemplate;
