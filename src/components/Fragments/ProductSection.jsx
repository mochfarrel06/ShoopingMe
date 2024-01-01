import React from "react";

const ProductSection = React.forwardRef(({children, title}, ref) => {
  return (
    <div
      ref={ref}
      className="py-10 max-[400px]:py-8 sm:py-14 md:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-xl font-bold tracking-tight text-gray-600 max-[400px]:text-lg md:text-2xl lg:text-3xl">
          {title}
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {children}
        </div>
      </div>
    </div>
  );
});

export default ProductSection;
