"use client";
import { FC } from "react";

// sub components
import IconButton from "@lib/IconButton";

// icons
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import GoogleIcon from "@/components/svg/GoogleIcon";

// atoms
import { useSetAtom } from "jotai";
import { isSettingsCollapsedAtom } from "@/store/layoutAtoms";

const HeaderButtons: FC = () => {
  const setSettingsCollapsed = useSetAtom(isSettingsCollapsedAtom);
  return (
    <div className="flex flex-1 justify-end items-center gap-1">
      <IconButton onClick={() => setSettingsCollapsed((prev) => !prev)}>
        <SettingsIcon className="text-gray-600" />
      </IconButton>
      <IconButton>
        <AppsIcon className="text-gray-600" />
      </IconButton>
      <div className="flex p-1 bg-white border border-gray-200 rounded-md items-center">
        <GoogleIcon className="text-gray-800 w-[70px] h-[25px] mr-2" />
        <div className="rounded-full w-7 h-7 flex text-white bg-green-700 text-[16px] items-center justify-center">
          M
        </div>
      </div>
    </div>
  );
};

export default HeaderButtons;
