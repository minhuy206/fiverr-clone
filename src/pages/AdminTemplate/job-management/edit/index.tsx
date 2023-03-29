import React, { useEffect } from "react";
import { Alert, Form, Input, message } from "antd";
import { useFormik } from "formik";
import api from "../../../../utils/apiUtils";
import { useDispatch, useSelector } from "react-redux";
import { fetchJob } from "../duck/action";
import { useParams } from "react-router-dom";
import LoadingSpin from "../../../../_components/LoadingSpin";
import { rootState } from "../../../../global/dataTypes";
const { TextArea } = Input;

const EditJob: React.FC = () => {
  const dispatch: any = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchJob(id));
  }, [id]);

  const { job, loading } = useSelector((state: rootState) => state.JobReducer);

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenCongViec: job.tenCongViec,
      giaTien: job.giaTien,
      danhGia: job.danhGia,
      hinhAnh: job.hinhAnh,
      moTa: job.moTa,
      maChiTietLoaiCongViec: job.maChiTietLoaiCongViec,
      moTaNgan: job.moTaNgan,
      saoCongViec: job.saoCongViec,
      nguoiTao: job.nguoiTao,
    },
    onSubmit: (values) => {
      api
        .put(`cong-viec/${id}`, values)
        .then((result) => {
          message.success("Cập nhật thành công");
        })
        .catch((error) => {
          message.error(error.response.data.content);
        });
    },
  });

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Sửa công việc</h1>
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
          <TextArea
            name="tenCongViec"
            onChange={formik.handleChange}
            value={formik.values.tenCongViec}
          />
          {formik.errors.tenCongViec && formik.touched.tenCongViec && (
            <Alert type="error" message={formik.errors.tenCongViec} banner />
          )}
        </Form.Item>
        <Form.Item label="Giá tiền">
          <Input
            name="giaTien"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.giaTien}
          />
          {formik.errors.giaTien && formik.touched.giaTien && (
            <Alert type="error" message={formik.errors.giaTien} banner />
          )}
        </Form.Item>
        <Form.Item label="Mã chi tiết loại công việc">
          <Input
            name="maChiTietLoaiCongViec"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.maChiTietLoaiCongViec}
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
          <TextArea
            rows={6}
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
          {formik.errors.moTa && formik.touched.moTa && (
            <Alert type="error" message={formik.errors.moTa} banner />
          )}
        </Form.Item>
        <Form.Item label="Mô tả ngắn">
          <TextArea
            rows={6}
            name="moTaNgan"
            onChange={formik.handleChange}
            value={formik.values.moTaNgan}
          />
          {formik.errors.moTaNgan && formik.touched.moTaNgan && (
            <Alert type="error" message={formik.errors.moTaNgan} banner />
          )}
        </Form.Item>
        <Form.Item label="Đánh giá">
          <Input
            name="danhGia"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.danhGia}
          />
          {formik.errors.danhGia && formik.touched.danhGia && (
            <Alert type="error" message={formik.errors.danhGia} banner />
          )}
        </Form.Item>
        <Form.Item label="Sao công việc">
          <Input
            name="saoCongViec"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.saoCongViec}
          />
          {formik.errors.saoCongViec && formik.touched.saoCongViec && (
            <Alert type="error" message={formik.errors.saoCongViec} banner />
          )}
        </Form.Item>
        <Form.Item label="Người tạo">
          <Input
            name="nguoiTao"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.nguoiTao}
          />
          {formik.errors.nguoiTao && formik.touched.nguoiTao && (
            <Alert type="error" message={formik.errors.nguoiTao} banner />
          )}
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

export default EditJob;
