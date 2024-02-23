export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center dark:bg-black">
        <div className="flex flex-col-reverse md:flex-row lg:justify-center w-full h-full">
          <div className="w-full h-20 md:h-full md:w-1/3 lg:w-1/4 bg-red-500 sticky md:sticky bottom-0 md:bottom-0 z-50 md:z-auto">
            Column 1
          </div>
          <div className="w-full lg:w-1/2 h-full bg-green-500 overflow-auto">
            Column 2
          </div>
          <div className="hidden md:block md:w-1/3 lg:w-1/4 h-full bg-blue-500 sticky md:sticky top-0">
            Column 3
          </div>
        </div>
      </div>
    </>
  );
}
