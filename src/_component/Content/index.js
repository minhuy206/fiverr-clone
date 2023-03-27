import React from "react";

export default function Content() {
  return (
    <div className="flex  py-5 ">
      <div className="w-1/2">
        <h1>A whole world of freelance talent at your fingertips</h1>
        <ul>
          <li>
            <h3 className="text-xl">The best for every budget</h3>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </li>
          <li>
            <h5>Quality work done quickly</h5>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </li>
          <li>
            <h5>Protected payments, every time</h5>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </li>
          <li>
            <h5>24/7 support</h5>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </li>
        </ul>
      </div>
      <div
        className="embed-responsive embed-responsive-1by1 relative w-1/2
        overflow-hidden "
        style={{ paddingTop: "10" }}
      >
        {/* <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"></video> */}

        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
    </div>
  );
}
