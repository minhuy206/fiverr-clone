import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "admin",
    element: lazy(() => import("../pages/AdminTemplate")),
    nested: [
      // {
      //   path: "",
      //   // element: lazy(() => import("")),
      // },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((template) => {
    // if (template.nested) {
    //   return (
    //     <Route
    //       key={template.path}
    //       path={template.path}
    //       element={<template.element />}
    //     >
    //       {template.nested.map((route) => (
    //         <Route
    //           key={route.path}
    //           path={route.path}
    //           element={<route.element />}
    //         />
    //       ))}
    //     </Route>
    //   );
    // }
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
