import { Inter } from "next/font/google";

// custom components
import Header from "@/components/Layout/Header";
import CollapsedSideMenu from "@/components/Layout/CollapsedSideMenu";
import CollapsedSettings from "@/components/Layout/CollapsedSettings";
import MainContent from "@/components/Layout/MainContent";
import SideMenu from "@/components/Layout/SideMenu";

// global css
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gmail Shadow | NextJS | Tailwind",
  description: "It is a Gmail shadow test code created by Mohsen Lotfi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-screen min-h-screen">
      <body
        className={`${inter.className} flex bg-gray-100 text-gray-950 w-screen min-h-screen`}
      >
        <div className="flex w-full">
          <SideMenu />
          <div className="flex flex-1 flex-col overflow-y-auto max-h-screen">
            <Header />
            <div className="flex w-full flex-1 overflow-y-auto">
              <CollapsedSideMenu />
              <MainContent>{children}</MainContent>
              <CollapsedSettings />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
