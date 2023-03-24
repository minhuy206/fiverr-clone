import React, { Fragment, useEffect, useState } from "react";
import { Button, Space, Table, Input, message, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Service } from "../../../global/dataTypes";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../store/store";
import { removeAccents } from "../../../utils/utils";
import api from "../../../utils/apiUtils";
import { fetchServices } from "./duck/action";

const ServiceManagement: React.FC = () => {
  const dispatch: any = useDispatch();
  const { services } = useSelector((state: rootState) => state.ServiceReducer);
  const navigate: any = useNavigate();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  const deleteService = (id: number) => {
    api
      .delete(`thue-cong-viec/${id}`)
      .then((result) => {
        message.success("Xử lí thành công!");
        dispatch(fetchServices());
      })
      .catch((error) => {
        message.error(error.response.data.content);
      });
  };
  const columns: ColumnsType<Service> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã công việc",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Mã người thuê",
      dataIndex: "maNguoiThue",
      key: "maNguoiThue",
    },
    {
      title: "Ngày thuê",
      dataIndex: "ngayThue",
      key: "ngayThue",
    },
    {
      title: "Hoàn thành",
      key: "hoanThanh",
      dataIndex: "hoanThanh",
      render: (hoanThanh, _, index) => {
        let color = "red";
        let text = "Chưa hoàn thành";
        if (hoanThanh) {
          color = "green";
          text = "Đã hoàn thành";
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
      render: (service) => {
        return (
          <Fragment key={"btnContainer"}>
            <Button
              type="link"
              icon={
                <EditOutlined
                  onClick={() => {
                    navigate(`/admin/QuanLiDichVu/SuaDichVu/${service.id}`);
                  }}
                />
              }
            ></Button>
            <Button
              type="link"
              danger
              onClick={() => deleteService(service.id)}
              icon={<DeleteOutlined />}
            ></Button>
          </Fragment>
        );
      },
      width: 100,
    },
  ];
  const searchedService = services.filter((service) => {
    // const name: string = removeAccents(service.id);
    // return (
    //   name.toLowerCase().indexOf(removeAccents(keyword).toLowerCase()) !== -1
    // );
    return 123;
  });
  return (
    <>
      <h1 className="text-center text-4xl mb-5">Quản lí dịch vụ</h1>
      <Space className="site-button-ghost-wrapper mb-5" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("/admin/QuanLiDichVu/ThemDichVu");
          }}
        >
          Thuê dịch vụ
        </Button>
      </Space>
      <Input
        size="large"
        className="mb-5"
        placeholder="Tìm kiếm tên"
        onChange={(e: any) => setKeyword(e.target.value)}
        prefix={<SearchOutlined />}
      />
      <Table
        columns={columns}
        dataSource={keyword ? searchedService : services}
      />
    </>
  );
};

export default ServiceManagement;
