import Search from "@/app/components/Search";
import SearchHistory from "@/app/components/SearchHistory";

const Explore = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Search />
      <SearchHistory />
    </div>
  );
};

export default Explore;
