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

// types
import { HomePageTabsProps } from "@/interfaces/homePageProps";

const HomePageTabs: FC<HomePageTabsProps> = (props) => {
  const { onChange, focusedItem } = props;
  return (
    <ul className="flex">
      {homeTabs.map((tab, i) => (
        <li key={`home_tab_${i}`}>
          <HomeTabItem
            Icon={tab.icon}
            FilledIcon={tab.filledIcon}
            text={tab.text}
            focused={focusedItem === i}
            onClick={() => onChange(i)}
          />
        </li>
      ))}
    </ul>
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
