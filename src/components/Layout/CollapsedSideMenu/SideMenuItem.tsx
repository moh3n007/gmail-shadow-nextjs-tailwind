import { FC, useState } from "react";

// types
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface SideMenuItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  name: string;
  count?: number;
  children?: React.ReactNode;
  focused?: boolean;
}

const SideMenuItem: FC<SideMenuItemProps> = (props) => {
  const { Icon, name, children, count, focused } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!children) return;
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-1 rounded-full items-center 
     border border-transparent cursor-pointer py-1 pr-2 ${
       focused
         ? "text-gray-950 font-bold bg-gray-300 border-gray-500"
         : "text-gray-600 hover:bg-gray-200 hover:border-gray-300"
     }`}
        onClick={handleClick}
      >
        <div className="relative w-[18px] h-[18px] flex justify-center items-center ">
          {!!children && (
            <ArrowRightIcon
              fontSize="small"
              className={`absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 ${
                open ? "rotate-90" : ""
              }`}
            />
          )}
        </div>
        <Icon className="text-[18px] mr-3 text-inherit" />
        <p className="flex-1 text-sm text-inherit">{name}</p>
        {!!count && <p className="text-[12px] text-inherit">{count}</p>}
      </div>
      {!!children && (
        <ul className={`${open ? "h-fit flex" : "h-0 hidden"} flex-col pl-6`}>
          {children}
        </ul>
      )}
    </div>
  );
};

export default SideMenuItem;
