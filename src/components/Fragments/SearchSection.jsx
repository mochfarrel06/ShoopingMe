export default function SearchSection({products, searchQuery, children}) {
  const hasProduct = products.length > 0;

  return (
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div>
          <div className="flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start max-[400px]:gap-5">
            <h2 className="text-base font-normal tracking-wide text-gray-600 max-[400px]:text-sm lg:text-xl">
              Search result for{" "}
              <span className="font-bold text-gray-800">{searchQuery}</span>
            </h2>
            <p className="text-sm font-normal text-gray-500 tracking-wide">
              Showing products {products.length}
            </p>
          </div>
          {hasProduct ? (
            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {children}
            </div>
          ) : (
            <div className="mt-16 w-full">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}
