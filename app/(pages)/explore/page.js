"use client";
import { userHistory } from "@/app/Redux/User.Slice";
import Search from "@/app/components/Search";
import SearchHistory from "@/app/components/SearchHistory";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Explore = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userHistory(session?.user.email));
  }, [dispatch, session?.user.email]);
  return (
    <div className="w-full flex flex-col justify-center items-center p-2">
      <Search />
      <SearchHistory />
    </div>
  );
};

export default Explore;
