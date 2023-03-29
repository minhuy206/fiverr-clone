import { LoadingOutlined } from "@ant-design/icons";
import { memo } from "react";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
    }}
    spin
  />
);

const LoadingSpin = () => {
  return (
    <Spin
      style={{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      indicator={antIcon}
      key="spin"
    />
  );
};

export default memo(LoadingSpin);
