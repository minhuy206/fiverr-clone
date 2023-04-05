import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const GigCard = ({ gig }: any) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="gigCard md:block hidden">
        <NavLink to={`/gig/${gig.congViec.id}`}>
          <div className="image relative block">
            <img
              className="absolute top-0 left-0 z-10 h-full w-full object-cover"
              src={gig.congViec.hinhAnh}
              alt=""
            />
          </div>
          <div className="info">
            <div className="user">
              <img src={gig.avatar} alt="" />
              <span className="text-sm text-#222325 font-semibold">
                {gig.tenNguoiTao}
              </span>
            </div>
            <p className="text-#222325 font-normal cursor-pointer text-base">
              {gig.congViec.tenCongViec.length > 60
                ? gig.congViec.tenCongViec.substring(0, 60) + "..."
                : gig.congViec.tenCongViec}
            </p>
            <div className="star py-2.5 items-center gap-1 flex h-10">
              <FontAwesomeIcon
                icon={faStar}
                className="text-#ffbe5b"
                style={{ width: 15 }}
              />
              <span className="text-#ffbe5b font-semibold text-sm">
                {gig.congViec.saoCongViec}
              </span>
              <span className="text-#b5b6ba font-light">
                ({gig.congViec.danhGia})
              </span>
            </div>
          </div>
        </NavLink>
        <div className="detail">
          <FontAwesomeIcon
            className={like ? "text-#f74040" : "text-#b5b6ba"}
            icon={faHeart}
            onClick={() => {
              setLike(!like);
            }}
            style={{ width: 15 }}
          />
          <div className="price">
            <small className="font-semibold inline-block">STARTING AT</small>
            <span className="font-light">${gig.congViec.giaTien}</span>
          </div>
        </div>
      </div>
      <div
        className="gig-wrapper-impressions gig-wrapper list-view-card block md:hidden"
        data-gig-id="144330434_0"
        data-impression-collected="true"
      >
        <div className="list-view-card">
          <header className="flex flex-row mb-2">
            <div className="side-image">
              <img
                className="gig-image"
                src={gig.congViec.hinhAnh}
                alt={gig.congViec.tenCongViec}
                loading="lazy"
              />
              <div className="collect-container">
                <div className="collect-package card-collect">
                  <button className="bg-transparent flex border-none">
                    <FontAwesomeIcon
                      className={like ? "text-#f74040" : "text-#b5b6ba"}
                      icon={faHeart}
                      style={{ width: 15 }}
                      onClick={() => {
                        setLike(!like);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <NavLink to={`/gig/${gig.congViec.id}`}>
              <aside className="header-right flex justify-between flex-col pr-0 w-full h-full">
                <div className="title-fav-container flex justify-between">
                  <h3 className="mb-2 text-base font-normal">
                    {gig.congViec.tenCongViec.length > 50
                      ? gig.congViec.tenCongViec.substring(0, 50) + "..."
                      : gig.congViec.tenCongViec}
                  </h3>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="rating-wrapper">
                    <span className="gig-rating text-body-2 font-bold text-#ffbe5b">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-#ffbe5b"
                        style={{ width: 15 }}
                      />
                      {gig.congViec.saoCongViec}
                      <span className="ml-0.5 font-normal text-#b5b6ba">
                        {"("}
                        {gig.congViec.danhGia}
                        {")"}
                      </span>
                    </span>
                  </div>
                </div>
              </aside>
            </NavLink>
          </header>
          <NavLink to={`/gig/${gig.congViec.id}`}>
            <footer>
              <div className="seller-info text-body-2 items-center flex justify-between relative">
                <div className="inner-wrapper flex items-center w-full pl-0">
                  <span className="seller-image relative">
                    <div
                      className="inline-flex relative"
                      style={{ borderRadius: "50%" }}
                    >
                      <figure
                        style={{ fontSize: 24, backgroundColor: "#25A1B0" }}
                        className="seller-avatar inline-flex relative items-center rounded-full justify-center m-0 overflow-hidden"
                      >
                        <img
                          className="h-full w-full object-cover absolute "
                          src={gig.avatar}
                          alt={gig.tenNguoiTao}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                  </span>
                  <div className="seller-identifiers">
                    <div className="seller-name text-#222325 overflow-hidden text-ellipsis whitespace-nowrap">
                      <p className="font-medium">{gig.tenNguoiTao}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price ">
                <small className="leading-5 text-#74767e font-medium uppercase ">
                  Starting at
                </small>
                <span className="pl-1.5 text-xl font-light leading-5 text-right text-#404145 mt-0.5">
                  ${gig.congViec.giaTien}
                </span>
              </div>
            </footer>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default GigCard;
