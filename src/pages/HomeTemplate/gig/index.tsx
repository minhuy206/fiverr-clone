import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Reviews from "../../../_components/Reviews";
import FAQ from "../../../_components/FAQ";
import Tab from "../../../_components/Tabs";
import { Breadcrumb } from "antd";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { rootState } from "../../../global/dataTypes";
import { fetchGig, fetchReviews } from "./duck/action";
import LoadingSpin from "../../../_components/LoadingSpin";
import "./style.css";

const Gig: React.FC = () => {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetchGig(id));
    dispatch(fetchReviews(id));
  }, [id]);

  const { gig, loading, reviews } = useSelector(
    (state: rootState) => state.GigReducer
  );

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <div className="gig">
      <div className="gig-container">
        <div className="left">
          <Breadcrumb
            className="pb-2.5 text-sm"
            separator={
              <FontAwesomeIcon className="w-3 h-3" icon={faChevronRight} />
            }
            items={[
              {
                title: (
                  <NavLink to={`/categories/${gig?.tenLoaiCongViec}` || ""}>
                    {gig?.tenLoaiCongViec}
                  </NavLink>
                ),
              },
              {
                title: (
                  <NavLink to={`/categories/${gig?.tenNhomChiTietLoai}` || ""}>
                    {gig?.tenNhomChiTietLoai}
                  </NavLink>
                ),
              },
              {
                title: (
                  <NavLink to={`/search/${gig?.tenChiTietLoai}` || ""}>
                    {gig?.tenChiTietLoai}
                  </NavLink>
                ),
              },
            ]}
          />
          <h1 className="text-3xl pb-4">{gig?.congViec.tenCongViec}</h1>
          <div className="user flex items-center">
            <img
              className="h-8 w-8 rounded-full object-cover mr-4"
              src={gig?.avatar}
              alt={gig?.avatar}
            />
            <div className="flex items-center flex-wrap">
              <span className="font-bold mr-2 text-#404145 cursor-pointer hover:underline">
                {gig?.tenNguoiTao}
              </span>
              <span className="text-#ffbe5b mr-2 capitalize">
                Top rated seller
              </span>
              <span className="line mr-2 text-#c4c6c9 text-sm hidden">|</span>
              <div className="flex items-center gap-1 mr-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-#ffbe5b"
                  style={{ width: 15 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-#ffbe5b"
                  style={{ width: 15 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-#ffbe5b"
                  style={{ width: 15 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-#ffbe5b"
                  style={{ width: 15 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-#ffbe5b"
                  style={{ width: 15 }}
                />
                <span className="text-sm text-#ffbe5b font-bold">5</span>
                <span>(515)</span>
              </div>
              <span className="line mr-2 text-#c4c6c9 text-sm hidden">|</span>
              <span>4 Order in Queue</span>
            </div>
          </div>
          <div className="seller-loyalty-banner my-4 pt-5 text-#404145 inline-flex items-center text-sm pl-1 w-full gap-1">
            <img
              className="mr-3 h-12"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/56ff3db8ae625ba1d6493c3c250c5919-1625663632464/3-Trophy-70_alpha.gif"
              alt="animated trophy"
              data-impression-collected="true"
            />
            <b>People keep coming back!</b>
            <span>
              {" "}
              {gig?.tenNguoiTao} has an exceptional number of repeat buyers.
            </span>
          </div>
          <div className="slider mb-8 -mx-8 overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={gig?.congViec.hinhAnh}
              alt={gig?.congViec.tenCongViec}
            />
          </div>
          <div className="tab -mx-8 mb-8">
            <Tab gig={gig} />
          </div>
          <div className="contact-seller mb-8 p-6 bg-#fafafa">
            <button className="text-center capitalize w-full rounded cursor-pointer text-base font-medium py-3 px-6 border border-current text-#62646a">
              Contact seller
            </button>
          </div>
          <div className="gig-desc mb-8">
            <h2 className="text-xl leading-7 pb-6">About This Gig</h2>
            <div className="break-words text-base">
              {gig?.congViec.moTa.split(`\n`).map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          <div className="seller flex flex-col gap-6 mb-8">
            <h2 className="text-xl leading-7">About The Seller</h2>
            <div className="user flex gap-5">
              <img
                src={gig?.avatar}
                alt={gig?.avatar}
                className="w-28 h-28 object-cover rounded-full"
              />
              <div className="info">
                <p className="font-bold text-base pb-1">{gig?.tenNguoiTao}</p>
                <p className="font-normal text-base">Web Developer</p>
                <div className="flex gap-1 items-center pt-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-#ffbe5b"
                    style={{ width: 15 }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-#ffbe5b"
                    style={{ width: 15 }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-#ffbe5b"
                    style={{ width: 15 }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-#ffbe5b"
                    style={{ width: 15 }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-#ffbe5b"
                    style={{ width: 15 }}
                  />
                  <span className="text-sm font-bold text-#ffbe5b">5</span>
                  <span>(5)</span>
                </div>
                <button className="bg-white px-6 py-3 text-sm font-semibold leading-none cursor-pointer hover:bg-#74767e hover:text-white mt-5">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="faq mb-16">
            <FAQ />
          </div>
          <div className="reviews mb-16">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl leading-7">Reviews</h2>
              <div className="text-base">
                <span className="font-normal flex items-center">
                  Sort by
                  <span className="text-#222325 font-bold mx-2">
                    Most relevant
                  </span>
                  <FontAwesomeIcon
                    className="text-#222325 text-xs"
                    icon={faChevronDown}
                  />
                </span>
              </div>
            </div>
            <div className="reviews-package">
              <header className="reviews-header breakdown-header relative">
                <div className="details flex justify-between pb-3">
                  <h2 className="text-base leading-snug w-full block pb-0">
                    <span className="flex gap-3">
                      <span>
                        <span>{gig?.congViec.danhGia} </span>reviews for this
                        Gig
                      </span>
                      <div className="orca-rating">
                        <div className="flex gap-1 items-center">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-#ffbe5b"
                            style={{ width: 15 }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-#ffbe5b"
                            style={{ width: 15 }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-#ffbe5b"
                            style={{ width: 15 }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-#ffbe5b"
                            style={{ width: 15 }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-#ffbe5b"
                            style={{ width: 15 }}
                          />
                          <span className="text-sm font-bold text-#ffbe5b">
                            5
                          </span>
                        </div>
                      </div>
                    </span>
                  </h2>
                </div>
              </header>
              <span>
                <div className="breakdown-wrapper grid-12 pb-6">
                  <div className="col-12-xs col-6-sm">
                    <table className="stars-counters w-full">
                      <tbody>
                        <tr className="whitespace-nowrap">
                          <td className="pb-1">
                            <button
                              className="stars-filter text-#446ee7 border-none p-1.5 text-left text-base rounded cursor-pointer font-semibold leading-none relative"
                              data-impression-collected="true"
                            >
                              5 Stars
                            </button>
                          </td>
                          <td className="progress-bar-container pb-1">
                            <div className="flex items-center star-progress-bar">
                              <div className="rounded-full h-2 relative grow bg-#e4e5e7">
                                <span
                                  className="star-progress-shape"
                                  style={{ width: "96.98949162169838%" }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="star-num pb-1 text-#446ee7">
                            (
                            {gig?.congViec.danhGia
                              ? gig?.congViec.danhGia - 2
                              : gig?.congViec.danhGia}
                            )
                          </td>
                        </tr>
                        <tr className="whitespace-nowrap">
                          <td className="pb-1">
                            <button
                              className="stars-filter text-#446ee7 border-none p-1.5 text-left text-base rounded cursor-pointer font-semibold leading-none relative"
                              data-impression-collected="true"
                            >
                              4 Stars
                            </button>
                          </td>
                          <td className="progress-bar-container pb-1">
                            <div className="flex items-center star-progress-bar">
                              <div className="rounded-full h-2 relative grow bg-#e4e5e7">
                                <span
                                  className="star-progress-shape"
                                  style={{ width: "3%" }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="star-num pb-1 text-#446ee7">
                            ({/* */}2{/* */})
                          </td>
                        </tr>
                        <tr className="whitespace-nowrap opacity-70">
                          <td className="pb-1">
                            <button
                              className="border-none p-1.5 text-left text-base rounded cursor-pointer font-semibold leading-none relative"
                              data-impression-collected="true"
                            >
                              3 Stars
                            </button>
                          </td>
                          <td className="progress-bar-container pb-1">
                            <div className="flex items-center star-progress-bar">
                              <div className="rounded-full h-2 relative grow bg-#e4e5e7">
                                <span
                                  className="star-progress-shape"
                                  style={{ width: "0" }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="star-num pb-1">
                            ({/* */}0{/* */})
                          </td>
                        </tr>
                        <tr className="whitespace-nowrap opacity-70">
                          <td className="pb-1">
                            <button
                              className="border-none p-1.5 text-left text-base rounded cursor-pointer font-semibold leading-none relative"
                              data-impression-collected="true"
                            >
                              2 Stars
                            </button>
                          </td>
                          <td className="progress-bar-container pb-1">
                            <div className="flex items-center star-progress-bar">
                              <div className="rounded-full h-2 relative grow bg-#e4e5e7">
                                <span
                                  className="star-progress-shape"
                                  style={{ width: "0" }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="star-num pb-1">
                            ({/* */}0{/* */})
                          </td>
                        </tr>
                        <tr className="whitespace-nowrap opacity-70">
                          <td className="pb-1">
                            <button
                              className="border-none p-1.5 text-left text-base rounded cursor-pointer font-semibold leading-none relative"
                              data-impression-collected="true"
                            >
                              1 Stars
                            </button>
                          </td>
                          <td className="progress-bar-container pb-1">
                            <div className="flex items-center star-progress-bar">
                              <div className="rounded-full h-2 relative grow bg-#e4e5e7">
                                <span
                                  className="star-progress-shape"
                                  style={{ width: "0" }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="star-num pb-1">
                            ({/* */}0{/* */})
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12-xs col-6-sm">
                    <div className="ranking">
                      <h6 className="text-base">Rating Breakdown</h6>
                      <ul className="text-base">
                        <li>
                          Seller communication level
                          <span>
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-#ffbe5b"
                                style={{ width: 15 }}
                              />
                              <b className="rating-score pl-1 text-#ffbe5b text-sm leading-5">
                                5
                              </b>
                            </div>
                          </span>
                        </li>
                        <li>
                          Recommend to a friend
                          <span>
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-#ffbe5b"
                                style={{ width: 15 }}
                              />
                              <b className="rating-score pl-1 text-#ffbe5b text-sm leading-5">
                                4.9
                              </b>
                            </div>
                          </span>
                        </li>
                        <li>
                          Service as described
                          <span>
                            <div className="flex items-center">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-#ffbe5b"
                                style={{ width: 15 }}
                              />
                              <b className="rating-score pl-1 text-#ffbe5b text-sm leading-5">
                                5
                              </b>
                            </div>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
              <div className="reviews-wrap mt-10">
                <h2 className="text-xl pb-1.5">Filter</h2>
                <div className="text-base mb-6">
                  <span className="font-normal flex items-center">
                    Industry
                    <span className="text-#222325 font-bold mx-2">
                      All Industries
                    </span>
                    <FontAwesomeIcon
                      className="text-#222325 text-xs"
                      icon={faChevronDown}
                    />
                  </span>
                </div>
                <div></div>
                <Reviews reviews={reviews} />
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1 hidden">
          <div className="sticky top-8 pb-8 mb-8">
            <div className="tab mb-4">
              <Tab gig={gig} />
            </div>
            <div className="get-quote py-3 px-6 bg-#fafafa flex flex-col justify-between items-center">
              <span className="font-semibold mb-4 text-center">
                Do you have any special requirements?
              </span>
              <button className="capitalize w-1/2 rounded cursor-pointer text-sm font-medium py-3 px-6 border border-current text-#62646a hover:bg-#74767e hover:text-white">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
