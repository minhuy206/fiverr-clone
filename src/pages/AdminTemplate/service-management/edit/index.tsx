import React, { useEffect } from "react";
import { Alert, DatePicker, Form, Input, message, Select } from "antd";
import { useFormik } from "formik";
import api from "../../../../utils/apiUtils";
import { handleChangeDatePicker, handleSelect } from "../../../../utils/utils";
import { number, object, string } from "yup";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../duck/action";
import { datePattern } from "../../../../global/regexPattern";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../../../global/constants";
import LoadingSpin from "../../../../_components/LoadingSpin";
import { rootState } from "../../../../global/dataTypes";

const EditService: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { service, loading } = useSelector(
    (state: rootState) => state.ServiceReducer
  );
  useEffect(() => {
    dispatch(fetchService(id));
  }, [id]);
  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      maCongViec: service.maCongViec,
      maNguoiThue: service.maNguoiThue,
      ngayThue: service.ngayThue,
      hoanThanh: service.hoanThanh,
    },
    validationSchema: object({
      maCongViec: number().required("Vui lòng nhập mã công việc"),
      maNguoiThue: number().required("Vui lòng nhập mã người thuê"),
      ngayThue: string()
        .matches(datePattern, "Vui lòng chọn ngày thuê")
        .required("Vui lòng chọn ngày thuê"),
    }),
    onSubmit: (values) => {
      api
        .post("thue-cong-viec", values)
        .then((result) => {
          message.success("Thuê thành công");
        })
        .catch((error) => {
          console.log(error);
          message.error(error.response.data.content);
        });
    },
  });

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Sửa dịch vụ</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        style={{
          margin: "auto",
          maxWidth: 600,
        }}
      >
        <Form.Item label="Mã công việc">
          <Input
            value={formik.values.maCongViec}
            name="maCongViec"
            type="number"
            onChange={formik.handleChange}
          />
          {formik.errors.maCongViec && formik.touched.maCongViec && (
            <Alert type="error" message={formik.errors.maCongViec} banner />
          )}
        </Form.Item>
        <Form.Item label="Mã người thuê">
          <Input
            name="maNguoiThue"
            value={formik.values.maNguoiThue}
            type="number"
            onChange={formik.handleChange}
          />
          {formik.errors.giaTien && formik.touched.giaTien && (
            <Alert type="error" message={formik.errors.giaTien} banner />
          )}
        </Form.Item>
        <Form.Item label="Ngày thuê">
          <DatePicker
            onChange={handleChangeDatePicker(formik, "ngayThue")}
            value={dayjs(formik.values.ngayThue, DATE_FORMAT)}
            format={DATE_FORMAT}
          />
          {formik.errors.ngayThue && formik.touched.ngayThue && (
            <Alert type="error" message={formik.errors.ngayThue} banner />
          )}
        </Form.Item>
        <Form.Item label="Hoàn thành">
          <Select
            value={formik.values.hoanThanh}
            onChange={handleSelect(formik, "hoanThanh")}
          >
            <Select.Option value={false}>Chưa hoàn thành</Select.Option>
            <Select.Option value={true}>Đã hoàn thành</Select.Option>
          </Select>
        </Form.Item>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Cập nhật
          </button>
        </div>
      </Form>
    </>
  );
};

export default EditService;
