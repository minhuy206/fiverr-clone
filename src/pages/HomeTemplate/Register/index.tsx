import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actRegister } from "./duck/action";
import { useNavigate, Navigate } from "react-router-dom";
import LoadingSpin from "../../../_components/LoadingSpin";

export default function Register() {
  const dispatch: any = useDispatch();
  const prop = useSelector((state: any) => state.ActRegisterReducer);
  const naviget = useNavigate();

  const [state, setState] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "User",
    skill: [],
    certification: [],
  });

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actRegister(state, naviget));
  };

  if (localStorage.getItem("USER")) return <Navigate replace to="/" />;
  if (prop.loading) return <LoadingSpin />;

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Quick Register
        </h1>
        <form className="mt-6" onSubmit={handleOnSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleOnChange}
            />
          </div>

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
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              //   onChange={handleOnChange}
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
