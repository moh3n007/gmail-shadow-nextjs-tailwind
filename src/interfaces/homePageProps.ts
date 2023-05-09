import { SVGIconProps } from "./general";

export interface HomePageTabsProps {
  onChange: (index: number) => void;
  focusedItem: number;
}

export interface HomeTabItemProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: SVGIconProps;
  FilledIcon: SVGIconProps;
  text: string;
  focused?: boolean;
}
