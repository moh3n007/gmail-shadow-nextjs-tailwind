import { forwardRef } from "react";

// types
import { SearchFilterInputProps } from "@/interfaces/sideMenuProps";

const SearchFilterInput = forwardRef<HTMLInputElement, SearchFilterInputProps>(
  (props, ref) => {
    const { label, ...rest } = props;

    return (
      <div className="flex w-full items-center">
        <label className="flex w-full items-center">
          <p className="text-sm min-w-[150px] text-gray-600">{label}</p>
          <input
            {...rest}
            ref={ref}
            className="flex-1 transition outline-none bg-transparent border-b-2 border-b-gray-100 m-0 focus:border-b-blue-500 text-sm"
          />
        </label>
      </div>
    );
  }
);

SearchFilterInput.displayName = "SearchFilterInput";

export default SearchFilterInput;
