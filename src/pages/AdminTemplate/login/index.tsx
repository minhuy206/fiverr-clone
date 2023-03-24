import { Button, Form, Input, Alert, Space } from "antd";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { LoginModel } from "../../../global/dataTypes";
import api from "../../../utils/apiUtils";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
    }}
    spin
  />
);

const Login: React.FC = () => {
  const navigate: any = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = (values: LoginModel) => {
    setLoading(true);
    api
      .post("auth/signin", values)
      .then((result) => {
        setLoading(false);
        if (result.data.content.user.role === "USER") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập vào hệ thống",
              },
            },
          });
        }
        navigate("/admin", { replace: true });
        localStorage.setItem("USER", JSON.stringify(result.data.content));
      })

      .catch((error) => {
        setLoading(false);
        setError(error.response.data.content);
      });
  };

  const renderNoti = () => {
    return (
      error && (
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%" }}
          key="error"
        >
          <Alert message={error} type="error" banner />
        </Space>
      )
    );
  };

  if (localStorage.getItem("USER")) {
    return <Navigate replace to="/admin" key="/admin" />;
  } else if (loading) {
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
  }

  return (
    <div>
      <h1 className="text-4xl text-center my-10">Đăng nhập</h1>
      {renderNoti()}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        style={{
          maxWidth: 600,
          margin: "25px auto",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input name="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button ghost type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
