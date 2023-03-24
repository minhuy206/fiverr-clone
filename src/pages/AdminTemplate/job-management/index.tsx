import React, { Fragment, useEffect, useState } from "react";
import { Button, Space, Table, Input, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Job } from "../../../global/dataTypes";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./duck/action";
import { rootState } from "../../../store/store";
import { removeAccents } from "../../../utils/utils";
import api from "../../../utils/apiUtils";

const JobManagement: React.FC = () => {
  const dispatch: any = useDispatch();
  const { jobs } = useSelector((state: rootState) => state.JobReducer);
  const navigate: any = useNavigate();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  const deleteJob = (id: number) => {
    api
      .delete(`cong-viec/${id}`)
      .then((result) => {
        message.success("Xử lí thành công!");
        dispatch(fetchJobs());
      })
      .catch((error) => {
        message.error(error.response.data.content);
      });
  };
  const columns: ColumnsType<Job> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <p className="text-center">{id}</p>,
    },
    {
      title: "Name",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Price",
      dataIndex: `giaTien`,
      key: "giaTien",
      render: (giaTien) => <p className="text-center">{giaTien}</p>,
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (src) => <img src={src} alt="" width={50} key={src} />,
    },
    {
      title: "Star",
      dataIndex: "saoCongViec",
      key: "saoCongViec",
      render: (saoCongViec) => <p className="text-center">{saoCongViec}</p>,
    },
    {
      title: "Type",
      dataIndex: "maChiTietLoaiCongViec",
      key: "maChiTietLoaiCongViec",
      render: (maChiTietLoaiCongViec) => (
        <p className="text-center">{maChiTietLoaiCongViec}</p>
      ),
    },
    {
      title: "Desc",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
    },
    {
      title: "Action",
      key: "action",
      render: (job) => {
        return (
          <Fragment key={"btnContainer"}>
            <Button
              type="link"
              icon={
                <EditOutlined
                  onClick={() => {
                    navigate(`/admin/QuanLiCongViec/SuaCongViec/${job.id}`);
                  }}
                />
              }
            ></Button>
            <Button
              type="link"
              danger
              onClick={() => deleteJob(job.id)}
              icon={<DeleteOutlined />}
            ></Button>
          </Fragment>
        );
      },
      width: 100,
    },
  ];
  const searchedJobs = jobs.filter((job) => {
    const name: string = removeAccents(job.tenCongViec);
    return (
      name.toLowerCase().indexOf(removeAccents(keyword).toLowerCase()) !== -1
    );
  });
  return (
    <>
      <h1 className="text-center text-4xl mb-5">Quản lí công việc</h1>
      <Space className="site-button-ghost-wrapper mb-5" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("/admin/QuanLiCongViec/ThemCongViec");
          }}
        >
          Thêm công việc
        </Button>
      </Space>
      <Input
        size="large"
        className="mb-5"
        placeholder="Tìm kiếm tên"
        onChange={(e: any) => setKeyword(e.target.value)}
        prefix={<SearchOutlined />}
      />
      <Table columns={columns} dataSource={keyword ? searchedJobs : jobs} />
    </>
  );
};

export default JobManagement;
