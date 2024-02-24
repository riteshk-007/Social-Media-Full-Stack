"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    if (searchTerm === "") return;
    if (event.key === "Enter") {
      console.log(searchTerm);
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
