import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Form, Input, Select, DatePicker, message } from "antd";
import { useFormik } from "formik";
import { object, string } from "yup";
import dayjs from "dayjs";
import { fetchUser, fetchUsers } from "../duck/action";
import api from "../../../../utils/apiUtils";
import { handleChangeDatePicker, handleSelect } from "../../../../utils/utils";
import {
  datePattern,
  namePattern,
  passwordPattern,
  phonePattern,
} from "../../../../global/regexPattern";
import { DATE_FORMAT } from "../../../../global/constants";
import LoadingSpin from "../../../../_components/LoadingSpin";
import { rootState } from "../../../../global/dataTypes";

const EditUser: React.FC = () => {
  const navigate: any = useNavigate();
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { user, loading } = useSelector(
    (state: rootState) => state.UserReducer
  );
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      birthday: user.birthday,
      gender: user.gender,
      role: user.role,
      skill: user.skill,
      certification: user.certification,
    },
    validationSchema: object({
      name: string()
        .matches(namePattern, "Vui lòng nhập họ và tên không có ký tự số")
        .required("Vui lòng nhập họ và tên"),
      email: string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Vui lòng nhập email"),
      password: string().matches(
        passwordPattern,
        "Vui lòng nhập mật Khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
      ),

      phone: string()
        .matches(phonePattern, "Vui lòng nhập đúng định dạng số điện thoại")
        .required("Vui lòng nhập số điện thoại"),
      birthday: string()
        .matches(datePattern, "Vui lòng chọn ngày tháng năm sinh")
        .required("Vui lòng chọn ngày tháng năm sinh"),
    }),
    onSubmit: (user) => {
      api
        .put(`users/${id}`, user)
        .then((result) => {
          message.success("Xử lí thành công!");
          setTimeout(() => navigate("/admin/QuanLiNguoiDung"), 1000);
          dispatch(fetchUsers());
        })
        .catch((error) => {
          message.error(error.response.data.content);
        });
    },
  });

  const handleChangSkillAndCert = (e: any) => {
    const { name, value } = e.target;
    const valueArr: string[] = value
      .split(",")
      .map((item: string) => item.trim());
    formik.setFieldValue(name, valueArr);
  };

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Sửa người dùng</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
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
        <Form.Item label="Name">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <Alert type="error" message={formik.errors.name} banner />
          )}
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <Alert type="error" message={formik.errors.email} banner />
          )}
        </Form.Item>
        <Form.Item label="Password">
          <Input
            value={formik.values.password}
            type="password"
            name="password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <Alert type="error" message={formik.errors.password} banner />
          )}
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone && (
            <Alert type="error" message={formik.errors.phone} banner />
          )}
        </Form.Item>

        <Form.Item label="DOB">
          <DatePicker
            onChange={handleChangeDatePicker(formik, "birthday")}
            value={dayjs(formik.values.birthday, DATE_FORMAT)}
            format={DATE_FORMAT}
          />
          {formik.errors.birthday && formik.touched.birthday && (
            <Alert type="error" message={formik.errors.birthday} banner />
          )}
        </Form.Item>
        <Form.Item label="Gender">
          <Select
            value={formik.values.gender}
            onChange={handleSelect(formik, "gender")}
          >
            <Select.Option value={true}>Male</Select.Option>
            <Select.Option value={false}>Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Role">
          <Select
            onChange={handleSelect(formik, "role")}
            value={formik.values.role}
          >
            <Select.Option value="ADMIN">Admin</Select.Option>
            <Select.Option value="USER">User</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Skill">
          <Input
            name="skill"
            value={formik.values.skill.join(", ")}
            onChange={handleChangSkillAndCert}
          />
          {formik.errors.skill && formik.touched.skill && (
            <Alert type="error" message={formik.errors.skill} banner />
          )}
        </Form.Item>
        <Form.Item label="Certification">
          <Input
            name="certification"
            value={formik.values.certification.join(", ")}
            onChange={handleChangSkillAndCert}
          />
          {formik.errors.certification && formik.touched.certification && (
            <Alert type="error" message={formik.errors.certification} banner />
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

export default EditUser;
