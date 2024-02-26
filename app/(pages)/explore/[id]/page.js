"use client";
import UserList from "@/app/components/UserList";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state?.user);
  return (
    <div className="w-full h-full  p-4 lg:p-10">
      <div className="flex items-center md:text-3xl font-bold mb-6">
        <AiOutlineUser />
        <h1>People</h1>
      </div>
      {user?.user.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center text-black">
          <h1 className="text-2xl font-bold text-center bg-white  rounded-lg ">
            No user found
          </h1>
        </div>
      ) : (
        user?.user?.map((user) => {
          return <UserList key={user.id} user={user} />;
        })
      )}
    </div>
  );
};

export default User;
