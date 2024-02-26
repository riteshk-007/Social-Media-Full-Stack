"use client";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const SearchHistory = () => {
  const history = useSelector((state) => state?.user);

  return (
    <div className="w-full py-5 flex items-center justify-center px-3 border-t-2 flex-col">
      <h1 className="w-full flex items-center justify-end font-semibold border-b text-sm my-1">
        Search History
      </h1>

      {history?.user && history?.user.length > 0 ? (
        history?.user
          ?.map((item) => (
            <div
              key={item?.id}
              className="w-full md:w-11/12 flex justify-between items-center border-b py-2 px-3 my-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md "
            >
              <p className="text-left text-sm">{item?.search}</p>
              <FiX
                onClick={() => console.log("delete", item?.id)}
                fontSize={18}
                className="cursor-pointer bg-gray-300 text-white rounded-full p-1"
              />
            </div>
          ))
          .reverse()
      ) : (
        <p className="text-center text-gray-500">No search history</p>
      )}
    </div>
  );
};

export default SearchHistory;
