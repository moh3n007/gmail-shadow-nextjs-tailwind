import { FC } from "react";

// types
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface SideMenuLinkProps {
  count?: number;
  label: string;
  focused?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  FilledIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  children?: React.ReactNode;
}

const SideMenuLink: FC<SideMenuLinkProps> = (props) => {
  const { count, label, focused, Icon, FilledIcon, children } = props;

  return (
    <div className="relative cursor-pointer flex items-center flex-col group">
      {/* badge */}
      {!!count && (
        <div className="absolute text-[8px] px-[3px] -top-[2px] -right-[4px] rounded-full bg-red-500 text-white font-bold border border-white">
          {count}
        </div>
      )}

      {/* icon */}
      <div className="flex justify-center px-2 py-1 rounded-full group-hover:bg-gray-300">
        {focused ? <Icon fontSize="small" /> : <FilledIcon fontSize="small" />}
      </div>

      {/* label */}
      <p className={`text-[12px] font-${focused ? "bold" : "initial"}`}>
        {label}
      </p>

      {/* popup when hover */}
      {/* Start */}
      {!!children && (
        <>
          <div className="absolute hidden w-[10px] left-full top-2/4 -translate-y-2/4 group-hover:inline-block overflow-hidden z-10 ">
            <div className=" h-[14px]  bg-black -rotate-45 transform origin-top-right bg-white"></div>
          </div>
          <div className="fixed flex justify-center items-center hidden left-[56px] top-[64px] h-[calc(100vh-80px)] bg-white group-hover:flex shadow-popup min-w-[250px] rounded-[24px]">
            {children}
          </div>
        </>
      )}
      {/* End */}
    </div>
  );
};

export default SideMenuLink;
