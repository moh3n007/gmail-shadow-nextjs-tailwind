"use client";
import { FC } from "react";

// sub components
import HomeTabItem from "./HomePageTabs/HomeTabItem";

// icons
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

// headless UI components
import { Tab } from "@headlessui/react";

const HomePageTabs: FC = () => {
  return (
    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20">
      {homeTabs.map((tab, i) => (
        <Tab key={`home_tab_${i}`}>
          {({ selected }) => (
            <HomeTabItem
              Icon={tab.icon}
              FilledIcon={tab.filledIcon}
              text={tab.text}
              focused={selected}
            />
          )}
        </Tab>
      ))}
    </Tab.List>
  );
};

export default HomePageTabs;

const homeTabs = [
  {
    icon: InboxOutlinedIcon,
    filledIcon: InboxIcon,
    text: "Primary",
  },
  {
    icon: SellOutlinedIcon,
    filledIcon: LocalOfferIcon,
    text: "Promotions",
  },
  {
    icon: PeopleAltOutlinedIcon,
    filledIcon: PeopleAltRoundedIcon,
    text: "Social",
  },
];
