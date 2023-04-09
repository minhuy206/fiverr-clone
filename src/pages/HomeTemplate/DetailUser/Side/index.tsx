import React from "react";
import usericon from "../../../../assets/imgs/user-128.png";
import { GiPositionMarker } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

export default function Side() {
  return (
    <div className="">
      <div className="card  relative ">
        <img className="  mx-auto" src={usericon} alt="" />
        <div className="card-body">
          <h4 className="card-title text-center">Name</h4>
        </div>
        <div>
          <p className="absolute top-0 right-0 border border-green-500 rounded-full text-green-500 text-xs p-1 ">
            Online
          </p>
        </div>
      </div>

      <div className="flex justify-between ">
        <div>
          <GiPositionMarker
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          <span>From</span>
          <br />
          <FaUser
            style={{ display: "inline-block", marginRight: "2px" }}
          />{" "}
          <span>Member Since</span>
        </div>
        <div>
          <p>VietNam</p>
          <p>May 2021</p>
        </div>
      </div>
    </div>
  );
}
