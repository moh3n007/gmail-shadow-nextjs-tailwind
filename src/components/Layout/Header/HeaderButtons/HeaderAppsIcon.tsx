import IconButton from "@lib/IconButton";
import { FC, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import HeaderAppsMenu from "./HeaderAppsIcon/HeaderAppsMenu";

const HeaderAppsIcon: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative" id="header_apps_icon">
      <IconButton onClick={() => setOpenMenu(true)}>
        <AppsIcon className="text-gray-600" />
      </IconButton>
      {openMenu && <HeaderAppsMenu toggleMenu={setOpenMenu} />}
    </div>
  );
};

export default HeaderAppsIcon;
