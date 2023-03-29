import { useEffect, useState } from "react";
import "./Gigs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { PaginationProps } from "antd";
import { Pagination, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchGigs } from "./duck/action";
import { Gig, rootState } from "../../../global/dataTypes";
import {
  floatingMenu,
  PAGE_SIZE,
  togglersWrapper,
} from "../../../global/constants";
import LoadingSpin from "../../../_components/LoadingSpin";
import { useParams } from "react-router-dom";
import GigCard from "../../../_components/GigCard";

function Gigs() {
  const { tenCongViec } = useParams();
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetchGigs(tenCongViec));
  }, [tenCongViec]);
  const { gigs, loading } = useSelector(
    (state: rootState) => state.GigsReducer
  );
  const [current, setCurrent] = useState(1);
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
    <div className="gigs w-full flex justify-center">
      <div className="container">
        <h1 className="text-#222325 text-3xl font-semibold md:block hidden">
          Result for "AI Artists"
        </h1>
        <div className="sticky-wrapper hidden md:block">
          <div className="shadow-effect box-border my-0 mx-auto">
            <div className="floating-top-bar flex flex-1 flex-wrap justify-between items-center">
              <div className="top-filters flex items-center mt-4">
                {floatingMenu.map((menuTitle) => (
                  <div className="floating-menu grouped" key={menuTitle}>
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
        </div>

        <div className="hidden justify-between items-center md:flex">
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
        <div className="sticky-hoc md:hidden">
          <div className="sticky-wrapper">
            <div className="filter-button-wrapper pb-2">
              <div className="layout-row filters-container">
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
          </div>
        </div>
        <div className="cards grid grid-cols-1 gap-4 mt-3 md:mt-0 md:grid-cols-2 w-full">
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
}

export default Gigs;
