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
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      indicator={antIcon}
      key="spin"
    />
  );
};

export default memo(LoadingSpin);
