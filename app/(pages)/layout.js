"use client";
import SideNav from "../components/SideNav";
import { useSession } from "next-auth/react";
import UserList from "../components/UserList";

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
          className={`h-screen overflow-auto scrollbar-hide w-full ${
            session?.user ? "lg:w-1/2" : "w-full"
          }`}
        >
          {children}
        </div>
        {session?.user && (
          <div className="hidden lg:block md:w-1/3 lg:w-1/3 h-full sticky top-0  w-full items-end justify-evenly md:flex-col  border-gray-200 dark:bg-black dark:text-white border-l-2 md:pr-5 px-5 py-8 shadow-xl">
            <h1 className="text-xl font-semibold mb-4 dark:text-white">
              Suggestions for you
            </h1>
            <UserList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
