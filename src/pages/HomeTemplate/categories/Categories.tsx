import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categories.css";
import { mostPopulars, relatedLink } from "../../../global/constants";
import Buckets from "../../../_components/Buckets";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { rootState } from "../../../global/dataTypes";
import { useEffect } from "react";
import { fetchDetailJobType } from "./duck/action";
import LoadingSpin from "../../../_components/LoadingSpin";

const Categories = () => {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { detailJobTypes, loading } = useSelector(
    (state: rootState) => state.DetailJobTypesReducer
  );

  useEffect(() => {
    dispatch(fetchDetailJobType(id));
  }, [id]);

  // const convertMostPopularsToPages = (pageSize: number): object[][] => {
  //   let pages: object[][] = [];
  //   mostPopulars?.reduce(function (
  //     page: object[],
  //     mostPopular,
  //     index,
  //     mostPopulars
  //   ) {
  //     if ((index + 1) % pageSize === 0 || index === mostPopulars.length - 1) {
  //       page = [...page, mostPopular];
  //       pages = [...pages, page];
  //       return (page = []);
  //     }
  //     return [...page, mostPopular];
  //   },
  //   []);
  //   return pages;
  // };

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
      <div className="categories-container overflow-hidden">
        <div className="most-popular mt-12">
          <div className="most-popular-header mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Most popular in Graphics & Design
            </h2>
            <div className="buttons-wrapper flex gap-3 justify-center">
              <button className="carousel-btn left-arrow">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="carousel-btn right-arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          {/* <Slider {...settings}>
            {mostPopulars.map((item) => (
              <div className="slide" key={item.text}>
                <p className="most-popular-slide box-shadow-z2 p-3 justify-between">
                  <div className="flex items-center">
                    <img
                      className="mr-3 w-12 h-12"
                      src={item.imgSrc}
                      alt="Minimalist Logo Design"
                    />
                    <span className="text-base font-medium mr-3">
                      {item.text}
                    </span>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </p>
              </div>
            ))}
          </Slider> */}

          <div className="flex items-center flex-wrap">
            {mostPopulars.map((item) => (
              <div className="slide" key={item.text}>
                <p className="most-popular-slide box-shadow-z2 p-3 whitespace-nowrap">
                  <img
                    className="mr-3 w-12 h-12"
                    src={item.imgSrc}
                    alt="Minimalist Logo Design"
                  />
                  <span className="text-base font-medium mr-3 whitespace-nowrap">
                    {item.text}
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="buckets-section mt-12 mb-14">
        <Buckets detailJobTypes={detailJobTypes?.[0]} />
      </div>
      <div className="related-link pb-12">
        <div className="categories-container">
          <div className="related-links-title ">
            <h4 className="text-xl text-center">
              Services Related To Graphics &amp; Design
            </h4>
          </div>
          <div>
            <ul className="flex items-center mt-8 flex-wrap justify-center">
              {relatedLink.map((item, index) => (
                <span
                  className="bg-#efeff0 border-#efeff0 mb-4 mx-1.5 py-1 px-3 text-sm font-medium text-#74767e rounded-full inline-flex items-center justify-center text-center border border-solid"
                  key={index}
                >
                  <p className="">{item}</p>
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
