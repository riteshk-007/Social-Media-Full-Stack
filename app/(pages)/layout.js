"use client";
import SideNav from "../components/SideNav";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-black">
      <div className="flex flex-col-reverse md:flex-row lg:justify-center w-full h-full">
        {session?.user && (
          <div className="w-full h-20 md:h-full md:w-1/4 lg:w-1/4 sticky bottom-0 z-50 md:z-auto">
            <SideNav />
          </div>
        )}
        <div
          className={`h-screen overflow-auto scrollbar-hide ${
            session?.user ? "md:w-1/2 lg:w-1/2" : "w-full"
          }`}
        >
          {children}
        </div>
        {session?.user && (
          <div className="hidden md:block md:w-1/4 lg:w-1/4 h-full sticky top-0">
            Column 3
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
