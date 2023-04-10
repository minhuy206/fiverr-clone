import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  const navigate = useNavigate();
  const userStore: any = localStorage.getItem("USER");
  const [user, setUser] = useState<any>(JSON.parse(userStore));
  console.log(user);

  return (
    <header className=" inset-x-0 top-0 z-50 sticky  mx-16 ">
      <nav
        className=" py-5 md:flex md:items-center md:justify-between  bg-transparent
      "
      >
        <div>
          <img
            className="h-10 inline    cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/600px-Fiverr_Logo_09.2020.svg.png?20200920230923"
            alt="fiverr"
          />
        </div>
        {!user ? (
          <ul className="md:flex md:items-center ">
            <li className="mx-4">
              <a href="">Become a Seller</a>
            </li>
            <li className="mx-4">
              <NavLink to={"/login"}>Sign in</NavLink>
            </li>
            <button
              className="rounded-md  px-5 py-1 border-2 mx-4 border-green-500/50 hover:bg-green-500/50 hover:text-white
          "
            >
              Join
            </button>
          </ul>
        ) : (
          <>
            <div className="items-center">
              <Link to={`detail/${user.user.id}`}>
                {" "}
                <AiOutlineUser style={{ display: "inline" }} /> User
              </Link>
              <button
                className="ml-10"
                onClick={() => {
                  localStorage.clear();
                  setUser(null);
                  navigate("/");
                }}
              >
                Log out
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
