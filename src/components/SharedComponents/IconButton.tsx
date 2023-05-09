import { forwardRef } from "react";

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // any custom props
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={`${
          props.className ?? undefined
        } flex p-[8px] rounded-full hover:bg-gray-300 transition`}
      >
        {props.children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
