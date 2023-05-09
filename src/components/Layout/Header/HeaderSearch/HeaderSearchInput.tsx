"use client";
import { forwardRef } from "react";

// icons
import SearchIcon from "@mui/icons-material/Search";
import HeaderSearchInputFilter from "./HeaderSearchInput/HeaderSearchInputFilter";

const HeaderSearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="relative flex flex-1 items-center bg-white rounded-md py-2 px-4 shadow-lg">
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
