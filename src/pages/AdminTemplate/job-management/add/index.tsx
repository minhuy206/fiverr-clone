import React from "react";
import { Alert, Form, Input, message } from "antd";
import { useFormik } from "formik";
import api from "../../../../utils/apiUtils";

const AddJob: React.FC = () => {
  const formik: any = useFormik({
    initialValues: {
      id: 0,
      tenCongViec: "",
      giaTien: 0,
      danhGia: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
      nguoiTao: 0,
    },
    onSubmit: (values) => {
      api
        .post("cong-viec", values)
        .then((result) => {
          message.success("Thêm thành công");
        })
        .catch((error) => {
          console.log(error);
          message.error(error.response.data.content);
        });
    },
  });

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Thêm công việc</h1>
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
        <Form.Item label="Tên công việc">
          <Input name="tenCongViec" onChange={formik.handleChange} />
          {formik.errors.tenCongViec && formik.touched.tenCongViec && (
            <Alert type="error" message={formik.errors.tenCongViec} banner />
          )}
        </Form.Item>
        <Form.Item label="Giá tiền">
          <Input name="giaTien" type="number" onChange={formik.handleChange} />
          {formik.errors.giaTien && formik.touched.giaTien && (
            <Alert type="error" message={formik.errors.giaTien} banner />
          )}
        </Form.Item>
        <Form.Item label="Mã chi tiết loại công việc">
          <Input
            name="maChiTietLoaiCongViec"
            type="number"
            onChange={formik.handleChange}
          />
          {formik.errors.maChiTietLoaiCongViec &&
            formik.touched.maChiTietLoaiCongViec && (
              <Alert
                type="error"
                message={formik.errors.maChiTietLoaiCongViec}
                banner
              />
            )}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} />
          {formik.errors.moTa && formik.touched.moTa && (
            <Alert type="error" message={formik.errors.moTa} banner />
          )}
        </Form.Item>
        <Form.Item label="Mô tả ngắn">
          <Input name="moTaNgan" onChange={formik.handleChange} />
          {formik.errors.moTaNgan && formik.touched.moTaNgan && (
            <Alert type="error" message={formik.errors.moTaNgan} banner />
          )}
        </Form.Item>
        <Form.Item label="Đánh giá">
          <Input name="danhGia" type="number" onChange={formik.handleChange} />
          {formik.errors.danhGia && formik.touched.danhGia && (
            <Alert type="error" message={formik.errors.danhGia} banner />
          )}
        </Form.Item>
        <Form.Item label="Sao công việc">
          <Input
            name="saoCongViec"
            type="number"
            onChange={formik.handleChange}
          />
          {formik.errors.saoCongViec && formik.touched.saoCongViec && (
            <Alert type="error" message={formik.errors.saoCongViec} banner />
          )}
        </Form.Item>
        <Form.Item label="Người tạo">
          <Input name="nguoiTao" type="number" onChange={formik.handleChange} />
          {formik.errors.nguoiTao && formik.touched.nguoiTao && (
            <Alert type="error" message={formik.errors.nguoiTao} banner />
          )}
        </Form.Item>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Thêm công việc
          </button>
        </div>
      </Form>
    </>
  );
};

export default AddJob;
