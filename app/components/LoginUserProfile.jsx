"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const LoginUserProfile = () => {
  const { data: session } = useSession();
  return (
    <div
      className="w-full border rounded-lg flex items-center justify-center p-5 mt-10 
            shadow-md bg-gradient-to-r from-black via-gray-500 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-200"
      style={{
        background:
          "linear-gradient(90deg, #666 0%, gray 25%, white 50%, gray 75%, #666 100%)",
      }}
    >
      <div className="flex flex-col items-center relative">
        <div className="relative group">
          <Image
            src={session?.user?.image || "/./image.png"}
            alt="user"
            className="rounded-full shadow-md relative"
            width={150}
            height={150}
          />
          <span className="absolute bottom-5 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out md:opacity-0 md:group-hover:opacity-100 opacity-100">
            <FaPlus />
          </span>
        </div>
        <h1 className="text-lg font-bold mt-2">{session?.user?.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{session?.user?.email}</p>
      </div>
    </div>
  );
};

export default LoginUserProfile;
