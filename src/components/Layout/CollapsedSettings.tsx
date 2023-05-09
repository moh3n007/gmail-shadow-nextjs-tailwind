"use client";
import { FC, useMemo } from "react";
import IconButton from "@lib/IconButton";

// icons
import CloseIcon from "@mui/icons-material/Close";

// atoms
import { useAtom } from "jotai";
import { isSettingsCollapsedAtom } from "@/store/layoutAtoms";

const CollapsedSettings: FC = () => {
  const [isSettingsCollapsed, setIsSettingsCollapsed] = useAtom(
    isSettingsCollapsedAtom
  );

  const collapsedClasses = useMemo(
    () => (isSettingsCollapsed ? "" : `w-[250px] opacity-100 right-4`),
    [isSettingsCollapsed]
  );

  return (
    <aside
      className={`fixed h-[calc(100%-80px)] 
    bottom-4 right-0 flex flex-col transition transition-widthAndOpacity
    w-0 opacity-0 ${collapsedClasses}`}
    >
      <div className="relative flex flex-1 w-full justify-center items-center rounded-md shadow-md bg-white">
        <IconButton
          className="absolute top-2 right-2"
          onClick={() => setIsSettingsCollapsed((prev) => !prev)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        Some elements here
      </div>
    </aside>
  );
};

export default CollapsedSettings;
