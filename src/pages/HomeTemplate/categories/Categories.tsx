import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categories.css";
import { mostPopulars } from "../../../global/constants";
import Buckets from "../../../_components/buckets";

const Categories = () => {
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
      {/* <div className="categories-container">
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
          <div className="flex items-center justify-between">
            {mostPopulars.map((item) => (
              <div className="slide" key={item.text}>
                <a className="most-popular-slide box-shadow-z2 p-3">
                  <img
                    className="mr-3 w-12 h-12"
                    src={item.imgSrc}
                    alt="Minimalist Logo Design"
                  />
                  <span className="text-base font-medium mr-3">
                    {item.text}
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <section className="buckets-section mt-12">
        <Buckets />
      </section>
    </div>
  );
};

export default Categories;
