import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mostPopulars, relatedLink } from "../../../global/constants";
import Buckets from "../../../_components/buckets";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { rootState } from "../../../global/dataTypes";
import React, { useEffect } from "react";
import { fetchDetailJobType } from "./duck/action";
import LoadingSpin from "../../../_components/LoadingSpin";
import "./style.css";

const Categories: React.FC = () => {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { detailJobTypes, loading } = useSelector(
    (state: rootState) => state.DetailJobTypesReducer
  );

  useEffect(() => {
    dispatch(fetchDetailJobType(id));
  }, [id]);

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <div className="categories">
      <div className="banner-section">
        <div className="banner-wrapper bg-#0b3a23 w-full overflow-hidden">
          <div className="banner vertical-3">
            <div className="banner-content">
              <h1 className="text-white leading-tight text-3xl font-medium">
                Graphics & Design
              </h1>
              <p className="subtitle text-white text-lg text-center mt-3 font-light">
                Designs to make you stand out.
              </p>
              <div className="explanation-video hero-banner-video flex flex-wrap mt-5 justify-center">
                <button className="px-4 py-2.5 rounded cursor-pointer relative text-center text-sm bg-transparent text-white inline-flex items-center font-light hover:bg-white hover:text-#0b3a23">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="w-3.5 h-3.5 mr-1.5"
                  />
                  How Fiverr Works
                </button>
              </div>
            </div>
            <div className="banner-half left"></div>
            <div className="banner-half right"></div>
          </div>
        </div>
      </div>
      <div className="most-popular-section mt-12">
        <div className="categories-container overflow-hidden">
          <div className="most-popular-header mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Most popular in Graphics & Design
            </h2>
            <div className="buttons-wrapper gap-3 justify-center hidden">
              <button className="carousel-btn left-arrow">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="carousel-btn right-arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            {mostPopulars.map((item) => (
              <div className="slide" key={item.text}>
                <NavLink
                  to={`/search/${item.text}`}
                  className="most-popular-slide box-shadow-z2 p-3 whitespace-nowrap"
                >
                  <img
                    className="mr-3 w-12 h-12"
                    src={item.imgSrc}
                    alt="Minimalist Logo Design"
                  />
                  <span className="text-base font-medium mr-3 whitespace-nowrap">
                    {item.text}
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="buckets-section mt-12 mb-14">
        <Buckets detailJobTypes={detailJobTypes?.[0]} />
      </div>
      <div className="related-link-section pb-12">
        <div className="categories-container">
          <div className="related-links-title ">
            <h4 className="text-xl text-center">
              Services Related To Graphics &amp; Design
            </h4>
          </div>
          <div>
            <ul className="flex items-center mt-8 flex-wrap justify-center">
              {relatedLink.map((item, index) => (
                <NavLink
                  to={`/search/${item}`}
                  className="bg-#efeff0 border-#efeff0 mb-4 mx-1.5 py-1 px-3 text-sm font-medium text-#74767e rounded-full inline-flex items-center justify-center text-center border border-solid hover:underline"
                  key={index}
                >
                  <p className="">{item}</p>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
