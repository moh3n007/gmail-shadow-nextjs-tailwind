import { FC } from "react";
import Logo from "./Header/Logo";

const Header: FC = () => {
  return (
    <header className="flex w-full items-center p-2 pl-4 min-h-[56px]">
      <Logo />
    </header>
  );
};

export default Header;
