import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SideNav = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full h-full flex items-end justify-evenly md:flex-col  border-gray-200 dark:bg-black dark:text-white border-r-2 md:pr-5 px-2 py-2 shadow-xl">
      <Link href={"/"}>
        <svg
          id="logo-35"
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            className="ccompli1"
            fill="#007AFF"
          ></path>{" "}
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            className="ccustom"
            fill="#312ECB"
          ></path>{" "}
        </svg>
      </Link>

      <div className="w-full md:flex-col flex justify-evenly items-end space-y-5 md:space-y-10">
        {[
          { href: "/", icon: HiMiniHome, label: "Home" },
          { href: "/explore", icon: IoSearch, label: "Explore" },
          { href: "/profile", icon: FaUser, label: "Profile" },
        ].map(({ href, icon: Icon, label }) => (
          <TooltipProvider key={href}>
            <Tooltip>
              <TooltipTrigger>
                <Link href={href}>
                  <span className="w-full flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-3 rounded-md">
                    <Icon fontSize={24} />
                    <span className="hidden md:block font-semibold">
                      {label}
                    </span>
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p> {label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => signOut()}
                className=" flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"
              >
                <LuLogOut fontSize={24} />
                <span className="hidden md:block font-semibold">Logout</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href="/profile"
              className="border-2 rounded-full shadow md:px-3 md:py-2 flex items-center justify-center space-x-2 hover:bg-gray-200"
            >
              <Image
                src={session?.user?.image}
                width={50}
                height={50}
                alt="user"
                className="rounded-full  border-black dark:bg-black dark:text-white dark:border-white"
              />
              <div className="hidden sm:block">
                <h1 className="text-base font-bold">
                  {session?.user?.name || "/./image.png"}
                </h1>
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SideNav;
