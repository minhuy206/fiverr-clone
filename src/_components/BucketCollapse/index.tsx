import { Collapse } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const { Panel } = Collapse;

const items = [
  "Logo Design",
  "Brand Style Guides",
  "Fonts & Typography",
  "Business Cards & Stationery",
];

function BucketCollapse() {
  return (
    <Collapse
      className="buckets-collapse mt-4"
      size="large"
      ghost
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <FontAwesomeIcon
          className="w-3.5 h-3.5"
          icon={faChevronUp}
          rotation={isActive ? undefined : 180}
        />
      )}
    >
      <Panel
        className="relative"
        header={
          <div className="bucket-title">
            <div className="bucket-top flex items-center gap-4">
              <img
                className="img-wrapper rounded-lg w-20"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/431c7d880582a199f5b240dde2694206-1626594004536/Logo%20_%20Brand%20Identity_B_2x.png"
                alt="Logo &amp; Brand Identity"
                loading="lazy"
                style={{ height: 54 }}
              />
              <h3 className="text-lg text-#222325">Logo & Brand Identity</h3>
            </div>
          </div>
        }
        key="1"
      >
        {items.map((item, index) => (
          <div className="item-wrapper py-2 w-full relative" key={index}>
            <NavLink
              to={""}
              className="text-lg text-#62646a font-light hover:text-#62646a hover:underline"
            >
              {item}
            </NavLink>
          </div>
        ))}
      </Panel>
    </Collapse>
  );
}

export default BucketCollapse;
