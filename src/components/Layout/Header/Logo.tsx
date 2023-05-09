"use client";
import GmailIcon from "@/components/svg/GmailIcon";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className={`w-[250px] pl-4 bg-red-400 flex items-center`}>
      <GmailIcon className="w-[30px] h-[30px] mr-2 ml-1" />
      <p className="text-2xl text-gray-600 font-600">Gmail</p>
    </div>
  );
};

export default Logo;
