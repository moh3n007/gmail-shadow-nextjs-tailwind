import { FC } from "react";
import Logo from "./Header/Logo";
import HeaderSearch from "./Header/HeaderSearch";

const Header: FC = () => {
  return (
    <header className="flex w-full items-center py-2 min-h-[56px]">
      <Logo />
      <HeaderSearch />
    </header>
  );
};

export default Header;
