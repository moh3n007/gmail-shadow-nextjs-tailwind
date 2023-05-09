"use client";
import { forwardRef } from "react";

// sub components
import HeaderSearchInputFilter from "./HeaderSearchInput/HeaderSearchInputFilter";

// icons
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="relative flex flex-1 items-center bg-white rounded-md py-2 px-4 shadow-md">
      <label htmlFor="header_search_input" className="flex mr-2">
        <SearchIcon fontSize="small" />
      </label>
      <input
        {...props}
        ref={ref}
        id="header_search_input"
        className="outline-none bg-transparent flex-1"
        placeholder="Search in mail"
      />
      <HeaderSearchInputFilter />
    </div>
  );
});

export default HeaderSearchInput;
