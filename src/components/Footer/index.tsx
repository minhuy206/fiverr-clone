import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook, BsInstagram, BsCurrencyDollar } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="py-24 px-8 mx-14">
      <div className="flex justify-between pb-14  border-b ">
        <div>
          <p className="font-bold pb-4"> Categories</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Graphics & Design
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Digital Marketing
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Writing & Translation
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Video & Animation
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Music & Audio
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Programming & Tech
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">Data</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Business
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Lifestyle
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Photography
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Sitemap
          </p>
        </div>
        <div>
          <p className="font-bold pb-4"> About</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Careers
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Press & News
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Partnerships
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Terms of Service
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Intellectual Property Claims
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Investor Relations
          </p>
        </div>
        <div>
          <p className="font-bold pb-4"> Support</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Help & Support
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Trust & Safety
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Selling on Fiverr
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Buying on Fiverr
          </p>
        </div>
        <div>
          <p className="font-bold pb-4"> Community</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Customer Success Stories
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Community Hub
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">Forum</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Events
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">Blog</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Influencers
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Affiliates
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Podcast
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Invite a Friend
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Become a Seller
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Community Standards
          </p>
        </div>
        <div>
          <p className="font-bold pb-4"> More From Fiverr</p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Fiverr Business
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Fiverr Pro
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Fiverr Logo Maker
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Fiverr Guides
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Get Inspired
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            ClearVoice <br />
            <p className="text-sm text-gray-600/50">Content Marketing</p>
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Fiverr Workspace <br />
            <p className="text-sm text-gray-600/50">Invoice Software</p>
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Learn <br />
            <p className="text-sm text-gray-600/50">Online Courses</p>
          </p>
          <p className="cursor-pointer hover:underline pb-4 text-base">
            Working Not Working
          </p>
        </div>
      </div>
      <div className="flex py-10  justify-between items-center">
        <div className="opacity-50  grayscale">
          <img
            className="grayscale h-5 inline pr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/600px-Fiverr_Logo_09.2020.svg.png?20200920230923"
            alt=""
          />
          <span>
            {" "}
            <AiOutlineCopyrightCircle style={{ display: "inline" }} /> Fiverr
            International Ltd. 2023
          </span>
        </div>
        <div className="flex   justify-between items-center">
          <div
            className=" pr-10
          "
          >
            <ul className="">
              <li className="inline-block p-2 mr-10 hover:rounded-full hover:bg-slate-500/25 ">
                {" "}
                <AiOutlineTwitter
                  style={{
                    fontSize: "20px",
                  }}
                />
              </li>
              <li className="inline-block p-2 mr-10 hover:rounded-full hover:bg-slate-500/25 ">
                {" "}
                <BsFacebook
                  style={{
                    fontSize: "20px",
                  }}
                />
              </li>
              <li className="inline-block p-2 mr-10 hover:rounded-full hover:bg-slate-500/25 ">
                {" "}
                <AiFillLinkedin
                  style={{
                    fontSize: "20px",
                  }}
                />
              </li>
              <li className="inline-block p-2 mr-10 hover:rounded-full hover:bg-slate-500/25 ">
                {" "}
                <FaPinterest
                  style={{
                    fontSize: "20px",
                  }}
                />
              </li>
              <li className="inline-block p-2 mr-10 hover:rounded-full hover:bg-slate-500/25">
                <BsInstagram
                  style={{
                    fontSize: "20px",
                  }}
                />
              </li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li className="inline-block p-2 opacity-50 font-bold  hover:rounded-full hover:bg-slate-500/25  hover:opacity-90">
                <GrLanguage style={{ display: "inline" }} />{" "}
                <span>English</span>
              </li>
              <li className="inline-block p-2  opacity-50 font-bold hover:rounded-full hover:bg-slate-500/25  hover:opacity-90">
                <BsCurrencyDollar style={{ display: "inline" }} />{" "}
                <span>USD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
