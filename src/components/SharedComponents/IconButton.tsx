import { forwardRef } from "react";

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return (
      <button
        {...props}
        className={`${
          props.className ?? undefined
        } flex p-[8px] rounded-full hover:bg-gray-200 transition`}
      >
        {props.children}
      </button>
    );
  }
);

export default IconButton;
