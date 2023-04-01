import { Collapse } from "antd";
import "./style.css";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const { Panel } = Collapse;

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h2 className="text-xl pb-1.5">FAQ</h2>
      <Collapse
        size="large"
        accordion
        ghost
        expandIcon={({ isActive }) => (
          <FontAwesomeIcon
            icon={faChevronUp}
            rotation={isActive ? undefined : 180}
            style={{ transition: ".2s" }}
          />
        )}
      >
        <Panel header="What do I need to get started?" key="1">
          <p>
            It was never as easy as placing the order on my gig. You will be
            asked few basis questions like your logo company name, slogan, color
            etc after you place the order.
          </p>
        </Panel>
        <Panel header="Which package should I Select?" key="2">
          <p>
            The quality of work in all three packages are almost same but the
            difference is in the number of initial concepts, revisions and
            deliverable files. Although PREMIUM PACKAGE is what you need for a
            TOP NOTCH SERVICE.
          </p>
        </Panel>
        <Panel header="My other expertise:" key="3">
          <p>
            Unique and Modern Minimalist design Flat logo design Modern art
            Signature logo Feminine art Real Estate logo 3D Logo design
            Professional logo design Luxury logo design
          </p>
        </Panel>
        <Panel
          header="What is the standard modification re-delivery time?"
          key="4"
        >
          <p>
            Modification re-delivery time is 48 to 72 hours depending upon the
            workload. But I will try to deliver as soon as possible.
          </p>
        </Panel>
        <Panel
          header="I need a full branding package. Can you do that?"
          key="5"
        >
          <p>Yes of course. Please contact me for further details.</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default memo(FAQ);
