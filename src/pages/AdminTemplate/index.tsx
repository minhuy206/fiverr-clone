import { Avatar } from "antd";
import { Layout, Menu } from "antd";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

const AdminTemplate: React.FC = () => {
  if (!localStorage.getItem("USER")) {
    return <Navigate replace to="/DangNhap" key="/DangNhap" />;
  }
  const username: null | string = JSON.parse(localStorage.getItem("USER") || "")
    .user.name;

  return (
    <Layout hasSider>
      <Sider
        style={{
          margin: "auto 20px auto 20px",
          overflow: "auto",
          height: "95vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            height: 32,
            margin: 24,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Avatar size={40}>{username?.charAt(0)}</Avatar>
          <span style={{ color: "#fff" }}>{username}</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            {
              key: "QuanLiNguoiDung",
              label: (
                <NavLink to={"QuanLiNguoiDung"}>Quản lí người dùng</NavLink>
              ),
            },
            {
              key: "QuanLiCongViec",
              label: <NavLink to={"QuanLiCongViec"}>Quản lí công việc</NavLink>,
            },
            {
              key: "QuanLiLoaiCongViec",
              label: (
                <NavLink to={"QuanLiLoaiCongViec"}>
                  Quản lí loại công việc
                </NavLink>
              ),
            },
            {
              key: "QuanLiDichVu",
              label: <NavLink to={"QuanLiDichVu"}>Quản lí dịch vụ</NavLink>,
            },
            {
              key: "Logout",
              label: (
                <NavLink
                  to={"/DangNhap"}
                  onClick={() => localStorage.removeItem("USER")}
                >
                  Đăng xuất
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 240 }}>
        <Content
          style={{
            marginTop: "24px",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "90vh",
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
