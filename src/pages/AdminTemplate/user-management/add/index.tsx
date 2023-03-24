import React from "react";
import { Alert, Form, Input, Select, DatePicker, message } from "antd";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import api from "../../../../utils/apiUtils";
import { fetchUsers } from "../duck/action";
import { handleChangeDatePicker, handleSelect } from "../../../../utils/utils";
import {
  namePattern,
  passwordPattern,
  phonePattern,
} from "../../../../global/regexPattern";

const AddUser: React.FC = () => {
  const dispatch: any = useDispatch();

  const formik: any = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "Admin",
      skill: [],
      certification: [],
    },
    validationSchema: object({
      name: string()
        .matches(namePattern, "Vui lòng nhập họ và tên không có ký tự số")
        .required("Vui lòng nhập họ và tên"),
      email: string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Vui lòng nhập email"),
      password: string()
        .matches(
          passwordPattern,
          "Vui lòng nhập mật Khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
        )
        .required("Vui lòng nhập mật khẩu"),
      phone: string()
        .matches(phonePattern, "Vui lòng nhập đúng định dạng số điện thoại")
        .required("Vui lòng nhập số điện thoại"),
      birthday: string().required("Vui lòng chọn ngày tháng năm sinh"),
    }),
    onSubmit: (user) => {
      api
        .post("users", user)
        .then((result) => {
          message.success("Xử lí thành công!");
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
  return (
    <>
      <h1 className="text-center text-4xl mb-5">Thêm người dùng</h1>
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
          <Input name="name" onChange={formik.handleChange} />
          {formik.errors.name && formik.touched.name && (
            <Alert type="error" message={formik.errors.name} banner />
          )}
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email" name="email" onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email && (
            <Alert type="error" message={formik.errors.email} banner />
          )}
        </Form.Item>
        <Form.Item label="Password">
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <Alert type="error" message={formik.errors.password} banner />
          )}
        </Form.Item>
        <Form.Item label="Phone">
          <Input name="phone" onChange={formik.handleChange} />
          {formik.errors.phone && formik.touched.phone && (
            <Alert type="error" message={formik.errors.phone} banner />
          )}
        </Form.Item>

        <Form.Item label="DOB">
          <DatePicker
            onChange={handleChangeDatePicker(formik, "birthday")}
            format={"DD/MM/YYYY"}
          />
          {formik.errors.birthday && formik.touched.birthday && (
            <Alert type="error" message={formik.errors.birthday} banner />
          )}
        </Form.Item>
        <Form.Item label="Gender">
          <Select defaultValue={true} onChange={handleSelect(formik, "gender")}>
            <Select.Option value={true}>Male</Select.Option>
            <Select.Option value={false}>Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Role">
          <Select onChange={handleSelect(formik, "role")} defaultValue="ADMIN">
            <Select.Option value="ADMIN">Admin</Select.Option>
            <Select.Option value="USER">User</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Skill">
          <Input name="skill" onChange={handleChangSkillAndCert} />
          {formik.errors.skill && formik.touched.skill && (
            <Alert type="error" message={formik.errors.skill} banner />
          )}
        </Form.Item>
        <Form.Item label="Certification">
          <Input name="certification" onChange={handleChangSkillAndCert} />
          {formik.errors.certification && formik.touched.certification && (
            <Alert type="error" message={formik.errors.certification} banner />
          )}
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Thêm người dùng
          </button>
        </div>
      </Form>
    </>
  );
};

export default AddUser;
