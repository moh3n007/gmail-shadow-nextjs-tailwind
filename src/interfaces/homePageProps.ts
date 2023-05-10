import { SVGIconProps } from "./general";

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
