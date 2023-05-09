"use client";
import { FC } from "react";

// shared components
import IconButton from "@lib/IconButton";

// icons
import MenuIcon from "@mui/icons-material/Menu";

// atoms
import { useSetAtom } from "jotai";
import { isSideMenuCollapsedAtom } from "@/store/layoutAtoms";

const SideMenu: FC = () => {
  const setIsSideMenuCollapsed = useSetAtom(isSideMenuCollapsedAtom);

  return (
    <div className="flex justify-center items-start bg-gray-200 p-2">
      <IconButton
        onClick={() => setIsSideMenuCollapsed((prev) => !prev)}
        className="mb-[32px]"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default SideMenu;
