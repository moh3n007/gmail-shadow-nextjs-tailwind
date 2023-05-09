import { forwardRef } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // any custom props
}

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

export default Button;
