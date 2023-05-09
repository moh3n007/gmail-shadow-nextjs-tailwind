import { forwardRef } from "react";

// tpes
import { ButtonProps } from "@/interfaces/sharedComponents/buttonProps";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { ...rest } = props;

  return (
    <button
      {...rest}
      ref={ref}
      className={`${
        rest?.className ?? ""
      } flex py-2 px-4 rounded-md text-sm font-bold transition`}
    >
      {rest?.children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
