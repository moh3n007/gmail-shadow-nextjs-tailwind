"use client";
import { FC, useMemo } from "react";

// atoms
import { useAtomValue } from "jotai";
import { isSideMenuCollapsedAtom } from "@/store/layoutAtoms";

const CollapsedSideMenu: FC = () => {
  const isSideMenuCollapsed = useAtomValue(isSideMenuCollapsedAtom);

  const collapsedClasses = useMemo(
    () => (isSideMenuCollapsed ? "" : `w-[250px] opacity-100`),
    [isSideMenuCollapsed]
  );

  return (
    <aside
      className={`flex flex-col transition transition-widthAndOpacity w-0 opacity-0 ${collapsedClasses}`}
    >
      dadadadas
    </aside>
  );
};

export default CollapsedSideMenu;
