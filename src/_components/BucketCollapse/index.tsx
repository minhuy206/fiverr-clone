import { Collapse } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { BucketCollapseProps } from "../../global/dataTypes";

const { Panel } = Collapse;

function BucketCollapse({ detailJobTypeGroup }: BucketCollapseProps) {
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
      {detailJobTypeGroup?.map((item) => (
        <Panel
          className="relative"
          header={
            <div className="bucket-title">
              <div className="bucket-top flex items-center gap-4">
                <img
                  className="img-wrapper rounded-lg w-20"
                  src={item.hinhAnh}
                  alt={item.tenNhom}
                  loading="lazy"
                  style={{ height: 54 }}
                />
                <h3 className="text-lg text-#222325">{item.tenNhom}</h3>
              </div>
            </div>
          }
          key={item.id}
        >
          {item.dsChiTietLoai.map((item) => (
            <div className="item-wrapper py-2 w-full relative" key={item.id}>
              <NavLink
                to={""}
                className="text-lg text-#62646a font-light hover:text-#62646a hover:underline"
              >
                {item.tenChiTiet}
              </NavLink>
            </div>
          ))}
        </Panel>
      ))}
    </Collapse>
  );
}

export default BucketCollapse;
