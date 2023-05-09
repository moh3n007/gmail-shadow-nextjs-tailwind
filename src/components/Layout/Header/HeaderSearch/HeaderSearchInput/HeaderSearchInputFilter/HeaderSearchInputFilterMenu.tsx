import { FC, useEffect } from "react";
import SearchFilterInput from "./HeaderSearchInputFilterMenu/SearchFilterInput";
import Button from "@lib/Button";

interface HeaderSearchInputFilterMenuProps {
  toggleMenu: (open: boolean) => void;
}

const HeaderSearchInputFilterMenu: FC<HeaderSearchInputFilterMenuProps> = ({
  toggleMenu,
}) => {
  const eventListener = (e: any) => {
    if (document.getElementById("clickbox")?.contains(e.target as any)) {
      toggleMenu(true);
    } else {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", eventListener);
    return () => {
      window.removeEventListener("click", eventListener);
    };
  }, []);

  return (
    <div className="absolute w-full flex flex-col top-[calc(100%+4px)] left-0 bg-white shadow-lg rounded-sm px-4 py-[16px] z-[9999] gap-4">
      <SearchFilterInput label="From" />
      <SearchFilterInput label="To" />
      <div className="flex justify-end flex-1 items-center gap-2">
        <Button className="text-gray-400 hover:bg-gray-200">
          Create filter
        </Button>
        <Button className="bg-blue-500 text-gray-100 hover:shadow-md">
          Search
        </Button>
      </div>
    </div>
  );
};

HeaderSearchInputFilterMenu.displayName = "HeaderSearchInputFilterMenu";
export default HeaderSearchInputFilterMenu;
