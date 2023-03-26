import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "admin",
    element: lazy(() => import("../pages/AdminTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/AdminTemplate/user-management")),
      },
      {
        path: "QuanLiNguoiDung",
        element: lazy(() => import("../pages/AdminTemplate/user-management")),
      },
      {
        path: "QuanLiNguoiDung/SuaNguoiDung/:id",
        element: lazy(
          () => import("../pages/AdminTemplate/user-management/edit")
        ),
      },
      {
        path: "QuanLiNguoiDung/ThemNguoiDung",
        element: lazy(
          () => import("../pages/AdminTemplate/user-management/add")
        ),
      },
      {
        path: "QuanLiCongViec",
        element: lazy(() => import("../pages/AdminTemplate/job-management")),
      },
      {
        path: "QuanLiCongViec/ThemCongViec",
        element: lazy(
          () => import("../pages/AdminTemplate/job-management/add")
        ),
      },
      {
        path: "QuanLiCongViec/SuaCongViec/:id",
        element: lazy(
          () => import("../pages/AdminTemplate/job-management/edit")
        ),
      },
      {
        path: "QuanLiLoaiCongViec",
        element: lazy(
          () => import("../pages/AdminTemplate/typeof-job-management")
        ),
      },
      {
        path: "QuanLiLoaiCongViec/ThemLoaiCongViec",
        element: lazy(
          () => import("../pages/AdminTemplate/typeof-job-management/add")
        ),
      },
      {
        path: "QuanLiLoaiCongViec/SuaLoaiCongViec/:id",
        element: lazy(
          () => import("../pages/AdminTemplate/typeof-job-management/edit")
        ),
      },
      {
        path: "QuanLiDichVu",
        element: lazy(
          () => import("../pages/AdminTemplate/service-management")
        ),
      },
      {
        path: "QuanLiDichVu/ThemDichVu",
        element: lazy(
          () => import("../pages/AdminTemplate/service-management/add")
        ),
      },
      {
        path: "QuanLiDichVu/SuaDichVu/:id",
        element: lazy(
          () => import("../pages/AdminTemplate/service-management/edit")
        ),
      },
    ],
  },
  {
    path: "DangNhap",
    element: lazy(() => import("../pages/AdminTemplate/login")),
  },
  {
    path: "",
    element: lazy(() => import("../pages/HomeTemplate")),
    nested: [
      {
        path: "search/:tenCongViec",
        element: lazy(() => import("../pages/HomeTemplate/gigs/Gigs")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((template) => {
    if (template.nested) {
      return (
        <Route
          key={template.path}
          path={template.path}
          element={<template.element />}
        >
          {template.nested.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      );
    }
    return (
      <Route
        key={template.path}
        path={template.path}
        element={<template.element />}
      />
    );
  });
};

export default renderRoutes;
