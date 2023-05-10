import { FC, useEffect } from "react";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import CallIcon from "@mui/icons-material/Call";
import CloudIcon from "@mui/icons-material/Cloud";
import FolderIcon from "@mui/icons-material/Folder";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import KeyIcon from "@mui/icons-material/Key";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import MouseIcon from "@mui/icons-material/Mouse";

interface HeaderAppsMenuProps {
  toggleMenu: (open: boolean) => void;
}

const HeaderAppsMenu: FC<HeaderAppsMenuProps> = ({ toggleMenu }) => {
  const eventListener = (e: any) => {
    if (
      document.getElementById("header_apps_icon")?.contains(e.target as any)
    ) {
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
    <div className="absolute w-[250px] max-h-[300px] flex flex-col top-[calc(100%+4px)] right-0 bg-white shadow-lg rounded-md px-4 py-[16px] z-[9999] gap-4">
      <div className="overflow-y-auto grid grid-cols-3 gap-3 scrollbar scrollbar-thumb-rounded-md scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {iconsObject.map((icon) => (
          <button
            key={`random_icon_${icon.id}`}
            className="w-full aspect-square rounded-md hover:bg-gray-200 transition transition-all"
          >
            {icon.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderAppsMenu;

const iconsObject = [
  {
    id: 1,
    icon: <AcUnitIcon />,
  },
  {
    id: 2,
    icon: <AccountCircleIcon />,
  },
  {
    id: 3,
    icon: <AddModeratorIcon />,
  },
  {
    id: 4,
    icon: <AirplanemodeInactiveIcon />,
  },
  {
    id: 5,
    icon: <BluetoothIcon />,
  },
  {
    id: 6,
    icon: <CallIcon />,
  },
  {
    id: 7,
    icon: <CloudIcon />,
  },
  {
    id: 8,
    icon: <FolderIcon />,
  },
  {
    id: 9,
    icon: <HeadphonesIcon />,
  },
  {
    id: 10,
    icon: <LightbulbIcon />,
  },
  {
    id: 11,
    icon: <KeyIcon />,
  },
  {
    id: 12,
    icon: <LooksOneIcon />,
  },
  {
    id: 13,
    icon: <MouseIcon />,
  },
];
