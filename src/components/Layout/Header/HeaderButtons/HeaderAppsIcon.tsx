import { FC } from "react";
// icons
import AppsIcon from "@mui/icons-material/Apps";

// sub components
import HeaderAppsMenu from "./HeaderAppsIcon/HeaderAppsMenu";

// headless UI components
import { Menu } from "@headlessui/react";

const HeaderAppsIcon: FC = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex p-[8px] rounded-full hover:bg-gray-300 transition">
          <AppsIcon className="text-gray-600" />
        </Menu.Button>
      </div>
      <HeaderAppsMenu />
    </Menu>
  );
};

export default HeaderAppsIcon;
