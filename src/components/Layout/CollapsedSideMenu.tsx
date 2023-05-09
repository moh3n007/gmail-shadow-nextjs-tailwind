"use client";
import { FC, useMemo } from "react";

// sub components
import SideMenuItem from "./CollapsedSideMenu/SideMenuItem";

// atoms
import { useAtomValue } from "jotai";
import { isSideMenuCollapsedAtom } from "@/store/layoutAtoms";

// icons
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const CollapsedSideMenu: FC = () => {
  const isSideMenuCollapsed = useAtomValue(isSideMenuCollapsedAtom);

  const collapsedClasses = useMemo(
    () => (isSideMenuCollapsed ? "" : `w-[250px] opacity-100 pr-2`),
    [isSideMenuCollapsed]
  );

  return (
    <aside
      className={`flex flex-col transition transition-widthAndOpacity w-0 opacity-0 pl-4 ${collapsedClasses}`}
    >
      <div className="flex flex-col gap-[4px]">
        <SideMenuItem Icon={InboxRoundedIcon} name="Inbox" count={5} focused />
        <SideMenuItem Icon={LabelOutlinedIcon} name="Categories">
          <SideMenuItem Icon={PeopleAltOutlinedIcon} name="Social" count={2} />
          <SideMenuItem Icon={InfoOutlinedIcon} name="Updates" count={45} />
        </SideMenuItem>
      </div>
    </aside>
  );
};

export default CollapsedSideMenu;
