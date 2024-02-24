"use client";
import { FiX } from "react-icons/fi";

const SearchHistory = () => {
  return (
    <div className="w-full py-5 flex items-center justify-center px-3 border-t-2 flex-col">
      <h1 className="w-full flex items-center justify-end font-semibold border-b text-sm my-1">
        Search History
      </h1>
      {/* <p className="text-center text-gray-500">No search history</p> */}

      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="w-full md:w-11/12 flex justify-between items-center border-b py-2 px-3 my-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md "
        >
          <p className="text-left text-sm">ritesh</p>
          <FiX
            fontSize={18}
            className="cursor-pointer bg-gray-300 text-white rounded-full p-1"
          />
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
