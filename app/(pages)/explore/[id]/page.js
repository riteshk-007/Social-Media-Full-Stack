import UserList from "@/app/components/UserList";
import { AiOutlineUser } from "react-icons/ai";

const User = () => {
  return (
    <div className="w-full h-full  p-4 lg:p-10">
      <div className="flex items-center md:text-3xl font-bold mb-6">
        <AiOutlineUser />
        <h1>People</h1>
      </div>
      <UserList />
    </div>
  );
};

export default User;
