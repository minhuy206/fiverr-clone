import "./GigCard.css";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";

const GigCard = ({ gig }: any) => {
  return (
    <>
      <div className="gigCard md:block hidden">
        <a href="#####" className="relative block">
          <div className="image">
            <img
              className="absolute top-0 left-0 z-10 h-full w-full object-cover"
              src={gig.congViec.hinhAnh}
              alt=""
            />
          </div>
        </a>
        <div className="info">
          <div className="user">
            <img src={gig.avatar} alt="" />
            <span className="text-sm text-#222325 font-semibold">
              {gig.tenNguoiTao}
            </span>
          </div>
          <p className="text-#222325 font-normal cursor-pointer text-base transition ease-in-out duration-150">
            {gig.congViec.tenCongViec.length > 60
              ? gig.congViec.tenCongViec.substring(0, 60) + "..."
              : gig.congViec.tenCongViec}
          </p>
          <div className="star">
            <img src={star} alt="" />
            <span>{gig.congViec.saoCongViec}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src={heart} alt="" />
          <div className="price">
            <small>STARTING AT</small>
            <span>${gig.congViec.giaTien}</span>
          </div>
        </div>
      </div>
      <div
        className="gig-wrapper-impressions gig-wrapper list-view-card block md:hidden"
        data-gig-id="144330434_0"
        data-impression-collected="true"
      >
        <div className="list-view-card">
          <header className="flex flex-row justify-between mb-2">
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
                    <img src={heart} width={16} alt="heart" />
                  </button>
                </div>
              </div>
            </div>
            <aside className="header-right flex justify-between flex-col pr-0 w-full">
              <div className="title-fav-container flex justify-between">
                <h3 className="mb-2 text-base">
                  {gig.congViec.tenCongViec.length > 50
                    ? gig.congViec.tenCongViec.substring(0, 50) + "..."
                    : gig.congViec.tenCongViec}
                </h3>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="rating-wrapper">
                  <span className="gig-rating text-body-2 font-bold text-#ffbe5b">
                    <img src={star} alt="star" />
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
          </header>
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
                    <p className="font-semibold">{gig.tenNguoiTao}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="price ">
              <small className="leading-5 text-#74767e font-semibold uppercase ">
                Starting at
              </small>
              <span className="pl-1.5 text-xl leading-5 text-right text-#404145 mt-0.5">
                ${gig.congViec.giaTien}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default GigCard;
