"use client";
import { FC } from "react";
import IconButton from "@lib/IconButton";

// icons
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

// atoms
import { useSetAtom } from "jotai";
import { isSettingsCollapsedAtom } from "@/store/layoutAtoms";

const HeaderButtons: FC = () => {
  const setSettingsCollapsed = useSetAtom(isSettingsCollapsedAtom);
  return (
    <div className="flex flex-1 justify-end items-center">
      <IconButton onClick={() => setSettingsCollapsed((prev) => !prev)}>
        <SettingsIcon className="text-gray-600" />
      </IconButton>
      <IconButton>
        <AppsIcon className="text-gray-600" />
      </IconButton>
    </div>
  );
};

export default HeaderButtons;
