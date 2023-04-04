import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { BucketCardProps } from "../../global/dataTypes";
import "./style.css";

function BucketCard({ detailJobTypeGroup }: BucketCardProps) {
  return (
    <article className="text-left overflow-visible">
      <div className="bucket-title">
        <div className="bucket-top">
          <img
            className="img-wrapper rounded-lg w-full h-full"
            src={detailJobTypeGroup?.hinhAnh}
            alt={detailJobTypeGroup?.tenNhom}
            loading="lazy"
          />
          <h3 className="text-xl text-#222325 pl-0 mt-6 mb-3">
            {detailJobTypeGroup?.tenNhom}
          </h3>
        </div>
      </div>
      <div className="bucket-content">
        <ul>
          {detailJobTypeGroup?.dsChiTietLoai.map((item: any) => (
            <li
              className="detailJobTypeGroup? text-lg py-2 px-3 -mx-3 hover:bg-#f5f5f5 rounded-lg box-content"
              key={item?.id}
            >
              <NavLink
                to={""}
                className="hover:text-#62646a font-light flex justify-between detailJobTypeGroup?s-center"
              >
                <span>{item?.tenChiTiet}</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-#404145 opacity-0 w-4 h-4"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default BucketCard;
