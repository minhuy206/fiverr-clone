import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { PaginationProps } from "antd";
import { Pagination, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchGigs } from "./duck/action";
import { Gig, rootState } from "../../../global/dataTypes";
import "./style.css";
import {
  floatingMenu,
  PAGE_SIZE,
  togglersWrapper,
} from "../../../global/constants";
import LoadingSpin from "../../../_components/LoadingSpin";
import { useParams } from "react-router-dom";
import GigCard from "../../../_components/GigCard";
import Sticky from "../../../_components/Sticky";

const Gigs: React.FC = () => {
  const { tenCongViec } = useParams();
  const dispatch: any = useDispatch();
  const { gigs, loading } = useSelector(
    (state: rootState) => state.GigsReducer
  );
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    dispatch(fetchGigs(tenCongViec));
  }, [tenCongViec]);

  const convertGigsToPages = (pageSize: number): Gig[][] => {
    let pages: Gig[][] = [];
    gigs?.reduce(function (page: Gig[], gig, index, gigs) {
      if ((index + 1) % pageSize === 0 || index === gigs.length - 1) {
        page = [...page, gig];
        pages = [...pages, page];
        return (page = []);
      }
      return [...page, gig];
    }, []);
    return pages;
  };

  const onChange: PaginationProps["onChange"] = (page): void => {
    setCurrent(page);
  };

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <div className="gigs w-full">
      <div className="gigs-container">
        <h1 className="text-#222325 text-3xl font-semibold md:block hidden">
          Result for "{tenCongViec}"
        </h1>
      </div>
      <Sticky className="sticky-wrapper hidden md:block bg-white sticky z-20">
        <div className="mx-auto pb-4 px-8" style={{ maxWidth: 1400 }}>
          <div className="floating-top-bar flex flex-1 flex-wrap justify-between items-center">
            <div className="top-filters flex items-center mt-4">
              {floatingMenu.map((menuTitle) => (
                <div
                  className="floating-menu mx-1.5 relative grouped"
                  key={menuTitle}
                >
                  <div className="menu-title more-filter-menu cursor-pointer">
                    <p className="font-medium text-sm text-#222325 md:whitespace-nowrap">
                      {menuTitle}
                    </p>
                    <FontAwesomeIcon
                      className="text-#222325 ml-3 relative bg-none border-none inline-block p-0"
                      icon={faChevronDown}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="togglers-wrapper mt-4 flex items-center">
              {togglersWrapper.map((togglerWrapper) => (
                <div
                  className="toggler-wrapper flex items-center mr-8"
                  key={togglerWrapper}
                >
                  <Switch size="small" className="mr-2" />
                  <p className="text-base font-semibold">{togglerWrapper}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sticky>
      <div className="gigs-container">
        <div className="hidden justify-between items-center md:flex mt-3.5">
          <div className="text-sm leading-5 font-semibold text-#74767e">
            {gigs?.length.toLocaleString()} services available
          </div>
          <div className="right text-base">
            <span className="font-normal flex items-center">
              Sort by
              <span className="text-#222325 font-bold mx-2">Relevance</span>
              <FontAwesomeIcon
                className="text-#222325 text-xs"
                icon={faChevronDown}
              />
            </span>
          </div>
        </div>
      </div>
      <Sticky className="sticky-hoc md:hidden px-8 bg-white pt-1 sticky">
        <div className="filter-button-wrapper pb-2">
          <div className="flex flex-initial flex-row flex-wrap mx-auto justify-between my-6">
            <button className="touch-filter">Filter</button>
            <button className="sort-button">Sort</button>
          </div>
          <div className="togglers-wrapper">
            <div className="toggler-wrapper flex items-center mr-8">
              <Switch size="small" className="mr-2" />
              <p className="text-base">Top Rated Seller</p>
            </div>
          </div>
        </div>
      </Sticky>
      <div className="gigs-container">
        <div className="cards grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 w-full">
          {convertGigsToPages(PAGE_SIZE)[current - 1]?.map((gig) => (
            <GigCard key={gig?.id} gig={gig} />
          ))}
        </div>
        <Pagination
          className="pagination"
          current={current}
          onChange={onChange}
          total={gigs?.length}
          pageSize={PAGE_SIZE}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Gigs;
