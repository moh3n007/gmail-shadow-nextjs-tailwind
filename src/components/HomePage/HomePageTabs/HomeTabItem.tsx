import { FC } from "react";

// types
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface HomeTabItemProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  FilledIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  focused?: boolean;
}

const HomeTabItem: FC<HomeTabItemProps> = (props) => {
  const { Icon, FilledIcon, text, focused, ...rest } = props;

  return (
    <button
      {...rest}
      className={`flex items-center relative min-w-[200px] transition transition-all px-2 py-4 font-bold text-gray-800 border-b-transparent ${
        focused ? "text-blue-700" : ""
      }  border-b-[3px] ${rest?.className ?? ""} hover:bg-gray-100`}
    >
      {focused ? (
        <FilledIcon className="text-[18px] mr-4 text-inherit" />
      ) : (
        <Icon className="text-[18px] mr-4 text-inherit" />
      )}
      <p className="text-inherit text-sm">{text}</p>
      <div
        className={`absolute w-[calc(100%-16px)] -translate-x-2/4 top-full left-2/4 h-[3px] bg-blue-700 z-10 rounded-t-lg transition transition-all scale-0 ${
          focused ? "scale-100" : ""
        }`}
      />
    </button>
  );
};

export default HomeTabItem;
