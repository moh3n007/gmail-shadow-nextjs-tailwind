import { Fragment } from "react";

// sub components
import SearchFilterInput from "./HeaderSearchInputFilterMenu/SearchFilterInput";
import Button from "@lib/Button";

// headless UI components
import { Menu, Transition } from "@headlessui/react";

const HeaderSearchInputFilterMenu = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute w-full flex flex-col top-[calc(100%+4px)] right-0 bg-white shadow-lg rounded-sm px-4 py-[16px] z-[9999] gap-4">
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
      </Menu.Items>
    </Transition>
  );
};

HeaderSearchInputFilterMenu.displayName = "HeaderSearchInputFilterMenu";
export default HeaderSearchInputFilterMenu;
