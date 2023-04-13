import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import { DATE_FORMAT } from "../../global/constants";
import { TabPaneProps } from "../../global/dataTypes";
import api from "../../utils/apiUtils";
import "./style.css";
import { replace } from "formik";

export default function TabPane({ quality, gig }: TabPaneProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleRent = (): void => {
    if (localStorage.getItem("USER")) {
      api
        .post("thue-cong-viec", {
          id: 0,
          maCongViec: id,
          maNguoiThue: JSON.parse(localStorage.getItem("USER") || "")?.user.id,
          ngayThue: dayjs(new Date()).format(DATE_FORMAT),
          hoanThanh: false,
        })
        .then((result) => {
          message.success("Rent Success");
        })
        .catch((error) => {
          message.error(error.response.data.content);
        });
    } else navigate("/login");
  };

  return (
    <div className="package-content relative px-6">
      <header className="header-recurring pb-2.5 leading-5">
        <h3 className="flex justify-between items-center">
          <p className="title text-base font-semibold uppercase">{quality}</p>
          <div className="pl-2.5 font-light text-xl">
            <span>${gig?.congViec.giaTien}</span>
          </div>
        </h3>
        <p
          className="mt-6 text-sm mb-2.5 text-#62646a"
          style={{ minHeight: 64 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          corrupti!
        </p>
      </header>
      <article>
        <div className="additional-info mb-2 flex gap-4 text-#62646a">
          <div className="delivery-wrapper inline-flex items-center">
            <FontAwesomeIcon className="w-4 h-4" icon={faClock} />
            <b className="delivery ml-2">5 Days Delivery</b>
          </div>
          <div className="revisions-wrapper inline-flex items-center">
            <span className="fill-#62646a">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" />
                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" />
              </svg>
            </span>
            <b className="revisions ml-2">1 Revision</b>
          </div>
        </div>
        <ul className="features mb-5">
          {gig?.congViec.moTaNgan.split("\r").map((desc, index) => {
            if (desc === "\n") {
              return <div key={index}></div>;
            }
            return (
              <li className="flex items-center text-#95979d" key={index}>
                <span
                  className="fill-#1dbf73 inline-block pr-3"
                  aria-hidden="true"
                  style={{ height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z" />
                  </svg>
                </span>
                {desc}
              </li>
            );
          })}
        </ul>
      </article>
      <footer className="pb-5 flex flex-col">
        <button
          className="bg-#1dbf73 rounded cursor-pointer font-semibold leading-none px-6 py-3 text-white flex items-center hover:bg-#19a463"
          type="button"
          onClick={handleRent}
        >
          <span className="flex-1 translate-x-2">Continue</span>
          <FontAwesomeIcon
            className="w-4 h-4 leading-none inline-block ml-auto"
            icon={faArrowRight}
          />
        </button>
        <button className="compare-package pt-3 bg-transparent text-#1dbf73 border-none hidden">
          Compare Packages
        </button>
      </footer>
    </div>
  );
}
