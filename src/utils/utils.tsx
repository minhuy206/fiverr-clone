import dayjs from "dayjs";

export function removeAccents(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export const handleSelect = (formik: any, name: string) => {
  return (value: string | boolean) => {
    formik.setFieldValue(name, value);
  };
};

export const handleChangeDatePicker = (formik: any, name: string) => {
  return (value: any) => {
    const date = dayjs(value?.$d).format("DD/MM/YYYY");
    formik.setFieldValue([name], date);
  };
};
