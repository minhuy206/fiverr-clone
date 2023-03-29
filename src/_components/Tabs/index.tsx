import { Tabs, TabsProps } from "antd";

import "./style.css";
import TabPane from "../TabPane";
import { TabProps } from "../../global/dataTypes";

const Tab = ({ gig }: TabProps) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Basic`,
      children: <TabPane gig={gig} quality={"Starter Package"} />,
    },
    {
      key: "2",
      label: `Standard`,
      children: <TabPane gig={gig} quality={"MOST SELLING PACKAGE"} />,
    },
    {
      key: "3",
      label: `Premium`,
      children: <TabPane gig={gig} quality={"PReMIUM BRANDING PACKAGE"} />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Tab;
