import React from "react";
import { Alert, Form, Input, message } from "antd";
import { useFormik } from "formik";
import api from "../../../../utils/apiUtils";

const AddType: React.FC = () => {
  const formik: any = useFormik({
    initialValues: {
      id: 0,
      tenLoaiCongViec: "",
    },
    onSubmit: (values) => {
      api
        .post("loai-cong-viec", values)
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
      <h1 className="text-center text-4xl mb-5">Thêm loại công việc</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          margin: "auto",
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tên loại công việc" className="mt-10">
          <Input name="tenLoaiCongViec" onChange={formik.handleChange} />
          {formik.errors.tenLoaiCongViec && formik.touched.tenLoaiCongViec && (
            <Alert
              type="error"
              message={formik.errors.tenLoaiCongViec}
              banner
            />
          )}
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Thêm loại công việc
          </button>
        </div>
      </Form>
    </>
  );
};

export default AddType;
