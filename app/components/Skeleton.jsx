import { Skeleton } from "@/components/ui/skeleton";
const Skeletons = () => {
  return (
    <div className="w-full">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="w-full lg:w-2/3 mx-auto py-3 my-5 px-2  shadow rounded-md flex-col border"
        >
          <div className="w-full flex items-center justify-start">
            <div className=" w-auto mx-2">
              <Skeleton className="w-[50px] h-[50px] rounded-full" />
            </div>
            <h1 className="font-bold text-sm">
              <Skeleton className="w-[100px] h-[20px] rounded-md" />
            </h1>
          </div>
          <div className="w-full flex items-start justify-center my-3 flex-col">
            <Skeleton className="w-full  h-[25px] my-1 rounded-md" />
            <Skeleton className="w-full  h-[25px] my-1 rounded-md" />
          </div>
          <div className="w-full flex items-start justify-center my-3 flex-col">
            <Skeleton className="w-full  h-48 md:h-80 rounded-md" />
          </div>
          <div className="w-full flex items-start justify-center my-3 flex-col">
            <Skeleton className="w-full  h-[40px] rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeletons;
