"use client";

// custom components
import HomePageTabs from "@/components/HomePage/HomePageTabs";
import HomePrimaryTab from "@/components/HomePage/HomePrimaryTab";

// headless UI components
import { Tab } from "@headlessui/react";

export default function Home() {
  return (
    <div className="rounded-md shadow-md flex flex-1 bg-white flex-col">
      <div className="flex flex-col flex-1">
        <h1 className="font-bold text-center py-4">This is *Home* page</h1>
        <Tab.Group>
          <HomePageTabs />
          <Tab.Panels className="border-t-[3px] border-gray-400 flex flex-1">
            {(Object.values(homePageTabs) as React.ReactNode[]).map(
              (component, idx) => (
                <Tab.Panel
                  key={idx}
                  className="flex flex-1 justify-center items-center"
                >
                  {component}
                </Tab.Panel>
              )
            )}
          </Tab.Panels>
        </Tab.Group>
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
