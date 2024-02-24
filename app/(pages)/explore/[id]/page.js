"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

// ...

const User = () => {
  const { data: session } = useSession();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center md:text-3xl font-bold mb-6">
        <AiOutlineUser />
        <h1>People</h1>
      </div>

      <div className="flex items-center justify-between p-4 bg-white shadow border my-2 rounded-lg mb-4">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src={session?.user?.image || "/./image.png"}
              alt="user"
              className="rounded-full"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h2 className="font-bold md:text-xl">{session?.user?.name}</h2>
            <p className="text-xs md:text-sm text-gray-500">
              {session?.user?.email}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className={`px-4 py-2 rounded-3xl ${
            isFollowing
              ? "bg-black text-white hover:bg-black hover:text-white"
              : "hover:bg-black bg-gray-200 hover:text-white"
          }`}
          onClick={handleFollowClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </div>
    </div>
  );
};

export default User;
