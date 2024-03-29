"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { UserSearch } from "../Redux/User.Slice";
import { useSession } from "next-auth/react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: session } = useSession();
  const handleSearch = (event) => {
    if (searchTerm === "") return;
    if (event.key === "Enter") {
      dispatch(UserSearch({ term: searchTerm, email: session?.user?.email }));
      router.push(`/explore/${searchTerm}`);
    }
  };

  return (
    <div className="w-full  py-5 flex items-center justify-center px-3">
      <div className="relative w-full max-w-md">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
