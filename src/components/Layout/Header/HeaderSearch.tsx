import { FC } from "react";

// sub components
import HeaderSearchInput from "./HeaderSearch/HeaderSearchInput";

const HeaderSearch: FC = () => {
  return (
    <div className="relative w-full max-w-[700px]">
      <HeaderSearchInput />
    </div>
  );
};

export default HeaderSearch;
