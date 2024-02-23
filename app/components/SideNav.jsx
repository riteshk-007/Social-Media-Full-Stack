import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const SideNav = () => {
  return (
    <div className="w-full h-full flex items-center justify-center md:flex-col bg-red-200">
      <Link
        href="/"
        className="w-full h-20 flex items-center justify-center space-x-2"
      >
        <span>
          <HiMiniHome fontSize={24} />
        </span>

        <span className="hidden md:block">Home</span>
      </Link>
      <Link
        href="/about"
        className="w-full h-20 flex items-center justify-center space-x-2"
      >
        <span>
          <IoSearch fontSize={24} />
        </span>

        <span className="hidden md:block">Explore</span>
      </Link>
      <div
        onClick={() => signOut()}
        className="w-full h-20 flex items-center justify-center space-x-2 cursor-pointer"
      >
        <span>
          <LuLogOut fontSize={24} />
        </span>

        <span className="hidden md:block">LogOut</span>
      </div>
    </div>
  );
};

export default SideNav;
