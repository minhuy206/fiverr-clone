import React from "react";

export default function Logo() {
  return (
    <div className="flex justify-center items-center py-5 mx-16 mb-16 mt-6">
      <div className=" md:invisible sm:invisible lg:visible xl:visible 2xl:visible ">
        <span>Trusted by:</span>
      </div>
      <div className="grayscale">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png"
          alt="facebook"
          className="h-10 inline mx-4 "
        />
      </div>
      <div className="grayscale">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="facebook"
          className="h-6 inline mx-4"
        />
      </div>
      <div className="grayscale">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="facebook"
          className="md:space-x-2 h-5 inline mx-4"
        />
      </div>
      <div className="grayscale">
        <img
          src="https://vdoc.edu.vn/wp-content/uploads/2022/03/PG-nghia-la-gi.png"
          alt="facebook"
          className="md:space-x-2 h-5 inline mx-4"
        />
      </div>
      <div className="grayscale">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
          alt="facebook"
          className="md:space-x-2 h-5 inline mx-4"
        />
      </div>
    </div>
  );
}
