import SideMenu from "@/components/Layout/SideMenu";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import CollapsedSideMenu from "@/components/Layout/CollapsedSideMenu";

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
          <div className="flex flex-1 flex-col">
            <Header />
            <div className="flex w-full flex-1">
              <CollapsedSideMenu />
              <div className="flex flex-1">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
