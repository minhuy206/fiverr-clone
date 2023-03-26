import React, { Fragment, useEffect, useState } from "react";
import { Button, Space, Table, Tag, Input, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { rootState, User } from "../../../global/dataTypes";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./duck/action";
import { removeAccents } from "../../../utils/utils";
import api from "../../../utils/apiUtils";

const UserManagement: React.FC = () => {
  const dispatch: any = useDispatch();
  const { users } = useSelector((state: rootState) => state.UserReducer);
  const navigate: any = useNavigate();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const deleteUser = (id: number) => {
    api
      .delete(`users?id=${id}`)
      .then((result) => {
        message.success("Xử lí thành công!");
        dispatch(fetchUsers());
      })
      .catch((error) => {
        message.error(error.response.data.content);
      });
  };
  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (src) => <img src={src} alt={src} width={50} key={src} />,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender, _, index) => {
        let color = "magenta";
        let text = "Female";
        if (gender) {
          color = "blue";
          text = "Male";
        }
        return (
          <Tag color={color} key={index}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (role, _, index) => {
        let color = "green";
        let text = "USER";
        if (role === "ADMIN") {
          color = "geekblue";
          text = "ADMIN";
        }
        return (
          <Tag color={color} key={index}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (user) => {
        return (
          <Fragment key={"btnContainer"}>
            <Button
              type="link"
              icon={
                <EditOutlined
                  onClick={() => {
                    navigate(`/admin/QuanLiNguoiDung/SuaNguoiDung/${user.id}`);
                  }}
                />
              }
            ></Button>
            <Button
              type="link"
              danger
              onClick={() => dispatch(deleteUser(user.id))}
              icon={<DeleteOutlined />}
            ></Button>
          </Fragment>
        );
      },
    },
  ];
  const searchedUsers = users.filter((user) => {
    const name: string = removeAccents(user.name);
    return (
      name.toLowerCase().indexOf(removeAccents(keyword).toLowerCase()) !== -1
    );
  });
  return (
    <>
      <h1 className="text-center text-4xl mb-5">Quản lí người dùng</h1>
      <Space className="site-button-ghost-wrapper mb-5" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("/admin/QuanLiNguoiDung/ThemNguoiDung");
          }}
        >
          Thêm người dùng
        </Button>
      </Space>
      <Input
        size="large"
        className="mb-5"
        placeholder="Tìm kiếm tên"
        onChange={(e: any) => setKeyword(e.target.value)}
        prefix={<SearchOutlined />}
      />
      <Table columns={columns} dataSource={keyword ? searchedUsers : users} />
    </>
  );
};

export default UserManagement;
