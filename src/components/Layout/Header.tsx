import { FC } from "react";

// child components
import Logo from "./Header/Logo";
import HeaderSearch from "./Header/HeaderSearch";
import HeaderButtons from "./Header/HeaderButtons";

const Header: FC = () => {
  return (
    <header className="flex w-full items-center py-2 min-h-[56px] pr-4">
      <Logo />
      <HeaderSearch />
      <HeaderButtons />
    </header>
  );
};

export default Header;
