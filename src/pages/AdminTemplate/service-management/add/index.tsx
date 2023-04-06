import React from "react";
import { Alert, DatePicker, Form, Input, message, Select } from "antd";
import { useFormik } from "formik";
import api from "../../../../utils/apiUtils";
import { handleChangeDatePicker, handleSelect } from "../../../../utils/utils";
import { number, object, string } from "yup";

const AddService: React.FC = () => {
  const formik: any = useFormik({
    initialValues: {
      id: 0,
      maCongViec: 0,
      maNguoiThue: 0,
      ngayThue: "",
      hoanThanh: false,
    },
    validationSchema: object({
      maCongViec: number().required("Vui lòng nhập mã công việc"),
      maNguoiThue: number().required("Vui lòng nhập mã người thuê"),
      ngayThue: string().required("Vui lòng chọn ngày thuê"),
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

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Thuê dịch vụ</h1>
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
            type="number"
            onChange={formik.handleChange}
          />
          {formik.errors.maNguoiThue && formik.touched.maNguoiThue && (
            <Alert
              type="error"
              message={formik.errors.giamaNguoiThueTien}
              banner
            />
          )}
        </Form.Item>
        <Form.Item label="Ngày thuê">
          <DatePicker
            onChange={handleChangeDatePicker(formik, "ngayThue")}
            format={"DD/MM/YYYY"}
          />
          {formik.errors.ngayThue && formik.touched.ngayThue && (
            <Alert type="error" message={formik.errors.ngayThue} banner />
          )}
        </Form.Item>
        <Form.Item label="Hoàn thành">
          <Select
            defaultValue={false}
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
            Thuê dịch vụ
          </button>
        </div>
      </Form>
    </>
  );
};

export default AddService;
