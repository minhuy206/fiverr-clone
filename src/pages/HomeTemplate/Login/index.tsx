import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actAuthLogin } from "./duck/action";
import { useNavigate, Navigate } from "react-router-dom";
import LoadingSpin from "../../../_components/LoadingSpin";

export default function Login() {
  const dispatch: any = useDispatch();
  const prop = useSelector((state: any) => state.AuthLoginUserReducer);
  const naviget = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actAuthLogin(state, naviget));
  };

  if (localStorage.getItem("USER")) return <Navigate replace to="/" />;
  if (prop.loading) return <LoadingSpin />;

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleOnSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
