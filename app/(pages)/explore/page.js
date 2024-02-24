import Search from "@/app/components/Search";
import SearchHistory from "@/app/components/SearchHistory";

const Explore = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-2">
      <Search />
      <SearchHistory />
    </div>
  );
};

export default Explore;
