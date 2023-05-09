import { forwardRef } from "react";

// types
import { IconButtonProps } from "@/interfaces/sharedComponents/buttonProps";

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
