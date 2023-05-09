import { SVGIconProps } from "./general";

export interface SearchFilterInputProps {
  label: string;
}

export interface SideMenuLinkProps {
  count?: number;
  label: string;
  focused?: boolean;
  Icon: SVGIconProps;
  FilledIcon: SVGIconProps;
  children?: React.ReactNode;
}

export interface SideBarProps {
  handleCollapse: VoidFunction;
}

export interface SideMenuItemProps {
  Icon: SVGIconProps;
  name: string;
  count?: number;
  children?: React.ReactNode;
  focused?: boolean;
}
