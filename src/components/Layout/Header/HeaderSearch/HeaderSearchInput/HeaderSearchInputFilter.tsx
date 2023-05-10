import { FC } from "react";

// sub components
import HeaderSearchInputFilterMenu from "./HeaderSearchInputFilter/HeaderSearchInputFilterMenu";

// icons
import TuneIcon from "@mui/icons-material/Tune";

// headless UI components
import { Menu } from "@headlessui/react";

const HeaderSearchInputFilter: FC = () => {
  return (
    <Menu as="div" className="inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={`flex p-[8px] rounded-full hover:bg-gray-300 transition -m-[4px] ${
                open ? "opacty-0 invisible" : "opacty-100 visible"
              }`}
            >
              <TuneIcon className="text-gray-600" />
            </Menu.Button>
          </div>
          <HeaderSearchInputFilterMenu />
        </>
      )}
    </Menu>
  );
};

export default HeaderSearchInputFilter;
