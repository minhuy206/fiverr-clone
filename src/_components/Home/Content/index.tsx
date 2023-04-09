import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Content() {
  return (
    <div className="flex md:flex-row flex-col py-24 px-8 mx-14 space-y-5 md:space-y-0 ">
      <div className="md:w-1/2 ">
        <div className="md:w-3/4 w-full">
          <h1 className="md:text-3xl font-bold ">
            A whole world of freelance talent at your fingertips
          </h1>

          <ul>
            <li>
              <h3 className="md:text-lg font-medium">
                <AiOutlineCheckCircle
                  style={{ display: "inline", margin: "5px" }}
                />{" "}
                The best for every budget
              </h3>
              <p className="md:text-xl font-normal">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <h5 className="text-lg font-medium">
                {" "}
                <AiOutlineCheckCircle
                  style={{ display: "inline", margin: "5px" }}
                />
                Quality work done quickly
              </h5>
              <p className="text-xl font-normal ">
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <h5 className="text-lg font-medium">
                {" "}
                <AiOutlineCheckCircle
                  style={{ display: "inline", margin: "5px" }}
                />
                Protected payments, every time
              </h5>
              <p className="text-xl font-normal">
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <h5 className="text-lg font-medium">
                {" "}
                <AiOutlineCheckCircle
                  style={{ display: "inline", margin: "5px" }}
                />
                24/7 support
              </h5>
              <p className="text-xl font-normal">
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="embed-responsive embed-responsive-1by1 relative md:w-1/2
        overflow-hidden  md:p-10"
        style={{ paddingTop: "10" }}
      >
        <iframe
          className="w-full aspect-video"
          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
        ></iframe>
      </div>
    </div>
  );
}
