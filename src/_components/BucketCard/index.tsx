import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./style.css";

function BucketCard() {
  return (
    <article className="text-left overflow-visible">
      <div className="bucket-title">
        <div className="bucket-top">
          <img
            className="img-wrapper rounded-lg w-full h-full"
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/431c7d880582a199f5b240dde2694206-1626594004536/Logo%20_%20Brand%20Identity_B_2x.png"
            alt="Logo & Brand Identity"
            loading="lazy"
          />
          <h3 className="text-xl text-#222325 pl-0 mt-6 mb-3">
            Logo & Brand Identity
          </h3>
        </div>
      </div>
      <div className="bucket-content">
        <ul>
          <li className="item text-lg py-2 px-3 -mx-3 hover:bg-#f5f5f5 rounded-lg box-content">
            <NavLink
              to={""}
              className="hover:text-#62646a font-light flex justify-between items-center"
            >
              <span>Logo Design</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-#404145 opacity-0 w-4 h-4 font-light"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default BucketCard;
