import React from "react";

export default function Banner() {
  return (
    <div className="md:flex  item-center py-5">
      <div className="w-1/2">
        <p>Find the perfect freelance services for your business</p>
        <input type="text" name="" id="" />
        <button>Search</button>

        <div className="py-10">
          <span>Popular:</span>
          <a className="border-2 px-3 py-2  rounded-full mx-4" href="">
            Website Design ádasdasd
          </a>
          <a className="border-2 px-3 py-2  rounded-full mx-4" href="">
            WordPress
          </a>
          <a className="border-2 px-3 py-2  rounded-full mx-4" href="">
            Logo Design
          </a>
          <a className="border-2 px-3 py-2  rounded-full mx-4" href="">
            AI Services
          </a>
        </div>
      </div>
      <div className="w-1/2">
        {/* <img src="./img/bg-signup-1400-x1.png" alt="hinh" /> */}
      </div>
    </div>
  );
}
