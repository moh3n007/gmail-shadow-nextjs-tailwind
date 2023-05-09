"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// sub components
import SideMenuLink from "./SideMenu/SideMenuLink";
import IconButton from "@lib/IconButton";

// atoms
import { useSetAtom } from "jotai";
import { isSideMenuCollapsedAtom } from "@/store/layoutAtoms";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const SideMenu: FC = () => {
  const setIsSideMenuCollapsed = useSetAtom(isSideMenuCollapsedAtom);

  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center items-start bg-gray-200 p-2">
      <IconButton
        onClick={() => setIsSideMenuCollapsed((prev) => !prev)}
        className="mb-[32px]"
      >
        <MenuIcon />
      </IconButton>
      <div className="flex flex-col gap-3">
        <Link href="/">
          <SideMenuLink
            Icon={MailRoundedIcon}
            FilledIcon={MailOutlineRoundedIcon}
            count={45}
            label="Mail"
            focused={pathname === "/"}
          >
            <p>Some elements here</p>
          </SideMenuLink>
        </Link>
        <Link href="/chat">
          <SideMenuLink
            Icon={ChatBubbleRoundedIcon}
            FilledIcon={ChatBubbleOutlineRoundedIcon}
            count={0}
            label="Chat"
            focused={pathname === "/chat"}
          >
            <p>Some elements here</p>
          </SideMenuLink>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
