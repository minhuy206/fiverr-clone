import React, { useState } from "react";
// import "./Featured.scss";
import { useNavigate } from "react-router-dom";

import MyImg from "./../../assets/imgs/mman.png";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="bg-red-300 ">
      <div className="flex justify-center items-center mx-16">
        <div className="w-1/2 ">
          <h1 className="text-3xl font-bold">
            Find the perfect <span className="italic">freelance</span> services
            for your business
          </h1>
          <div className="">
            <form className=" flex  items-center   py-5  ">
              <img
                src="./img/search.png"
                alt=""
                className="h-10 py-1 bg-white   "
              />
              <input
                className="outline-none border-none px-2 w-3/5 py-2
                "
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-green-800/60 px-4 py-2"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>

            <div className="">
              <span>Popular:</span>
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Design</button>
              <button>AI Services</button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={MyImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
