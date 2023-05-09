"use client";
import { useState } from "react";

// custom components
import HomePageTabs from "@/components/HomePage/HomePageTabs";
import HomePrimaryTab from "@/components/HomePage/HomePrimaryTab";

export default function Home() {
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <div className="rounded-md shadow-md flex flex-1 bg-white flex-col">
      <div className="flex flex-col flex-1">
        <h1 className="font-bold text-center py-4">This is *Home* page</h1>
        <HomePageTabs onChange={setTabNumber} focusedItem={tabNumber} />
        <div className="border-t-[3px] border-gray-400 flex flex-1 justify-center items-center">
          {homePageTabs[tabNumber]}
        </div>
      </div>
    </div>
  );
}

// home page tabs components
const homePageTabs = {
  0: <HomePrimaryTab />,
  1: <span>This is *Promotions* tab</span>,
  2: <span>This is *Social* tab</span>,
} as any;
