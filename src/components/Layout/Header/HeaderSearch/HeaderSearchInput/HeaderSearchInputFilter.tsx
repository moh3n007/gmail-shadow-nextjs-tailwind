import IconButton from "@lib/IconButton";
import { FC, useMemo, useState } from "react";

// icons
import TuneIcon from "@mui/icons-material/Tune";
import HeaderSearchInputFilterMenu from "./HeaderSearchInputFilter/HeaderSearchInputFilterMenu";

const HeaderSearchInputFilter: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const buttonClass = useMemo(
    () => (openMenu ? "opacty-0 invisible" : "opacty-100 visible"),
    [openMenu]
  );

  return (
    <div id="clickbox">
      <div className="ml-4">
        <IconButton
          className={`-m-[4px] ${buttonClass}`}
          onClick={() => setOpenMenu(true)}
        >
          <TuneIcon />
        </IconButton>
      </div>
      {openMenu && <HeaderSearchInputFilterMenu toggleMenu={setOpenMenu} />}
    </div>
  );
};

export default HeaderSearchInputFilter;