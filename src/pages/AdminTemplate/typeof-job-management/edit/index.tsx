import React, { useEffect } from "react";
import { Alert, Form, Input, message } from "antd";
import { useFormik } from "formik";
import api from "../../../../utils/apiUtils";
import { useParams } from "react-router-dom";
import { fetchType } from "../duck/action";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpin from "../../../../_components/LoadingSpin";
import { rootState } from "../../../../global/dataTypes";

const EditType: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchType(id)), [id]);
  const { type, loading } = useSelector(
    (state: rootState) => state.TypeReducer
  );

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenLoaiCongViec: type.tenLoaiCongViec,
    },
    onSubmit: (values) => {
      console.log(values);

      api
        .put(`loai-cong-viec/${id}`, values)
        .then((result) => {
          message.success("Sửa thành công");
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
      <h1 className="text-center text-4xl mb-5">Sửa loại công việc</h1>
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
          <Input
            name="tenLoaiCongViec"
            onChange={formik.handleChange}
            value={formik.values.tenLoaiCongViec}
          />
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
            Sửa loại công việc
          </button>
        </div>
      </Form>
    </>
  );
};

export default EditType;
