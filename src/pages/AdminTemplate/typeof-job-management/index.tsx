import React, { Fragment, useEffect, useState } from "react";
import { Button, Space, Table, Input, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { JobType } from "../../../global/dataTypes";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../store/store";
import { removeAccents } from "../../../utils/utils";
import api from "../../../utils/apiUtils";
import { fetchTypes } from "./duck/action";

const JobTypeManagement: React.FC = () => {
  const dispatch: any = useDispatch();
  const { types } = useSelector((state: rootState) => state.TypeReducer);
  const navigate: any = useNavigate();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    dispatch(fetchTypes());
  }, []);
  const deleteType = (id: number) => {
    api
      .delete(`loai-cong-viec/${id}`)
      .then((result) => {
        message.success("Xử lí thành công!");
        dispatch(fetchTypes());
      })
      .catch((error) => {
        message.error(error.response.data.content);
      });
  };
  const columns: ColumnsType<JobType> = [
    {
      title: () => <p className="text-center">ID</p>,
      dataIndex: "id",
      key: "id",
      render: (id) => <p className="text-center">{id}</p>,
    },
    {
      title: () => <p className="text-center">Tên loại công việc</p>,
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
      render: (tenLoaiCongViec) => (
        <p className="text-center">{tenLoaiCongViec}</p>
      ),
    },
    {
      title: () => <p className="text-center">Action</p>,
      key: "action",
      render: (type) => {
        return (
          <Fragment key={"btnContainer"}>
            <div className="text-center">
              <Button
                type="link"
                icon={
                  <EditOutlined
                    onClick={() => {
                      navigate(
                        `/admin/QuanLiLoaiCongViec/SuaLoaiCongViec/${type.id}`
                      );
                    }}
                  />
                }
              ></Button>
              <Button
                type="link"
                danger
                onClick={() => dispatch(deleteType(type.id))}
                icon={<DeleteOutlined />}
              ></Button>
            </div>
          </Fragment>
        );
      },
    },
  ];
  const searchedTypes = types.filter((type) => {
    const name: string = removeAccents(type.tenLoaiCongViec);
    return (
      name.toLowerCase().indexOf(removeAccents(keyword).toLowerCase()) !== -1
    );
  });
  return (
    <>
      <h1 className="text-center text-4xl mb-5">Quản lí loại công việc</h1>
      <Space className="site-button-ghost-wrapper mb-5" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("/admin/QuanLiLoaiCongViec/ThemLoaiCongViec");
          }}
        >
          Thêm loại công việc
        </Button>
      </Space>
      <Input
        size="large"
        className="mb-5"
        placeholder="Tìm kiếm tên"
        onChange={(e: any) => setKeyword(e.target.value)}
        prefix={<SearchOutlined />}
      />
      <Table columns={columns} dataSource={keyword ? searchedTypes : types} />
    </>
  );
};

export default JobTypeManagement;
