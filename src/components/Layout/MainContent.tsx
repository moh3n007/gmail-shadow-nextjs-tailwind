"use client";
import { FC } from "react";

// atoms
import { useAtomValue } from "jotai";
import { isSettingsCollapsedAtom } from "@/store/layoutAtoms";

const MainContent: FC<{ children: React.ReactNode }> = ({ children }) => {
  const isSettingsCollapsed = useAtomValue(isSettingsCollapsedAtom);

  return (
    <main
      className={`flex flex-col flex-1 mb-4 overflow-y-auto pr-4 transition transition-widthAndOpacity mr-0 ${
        isSettingsCollapsed ? "" : "mr-[266px]"
      }`}
    >
      {children}
    </main>
  );
};

export default MainContent;
