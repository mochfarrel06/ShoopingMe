import React, {Fragment} from "react";
import Skeleton from "react-loading-skeleton";

export default function ProductLoading({productCount}) {
  const skeletonArray = Array.from({length: productCount}, (_, index) => (
    <div key={index} className="border-2 border-gray-100 rounded-md px-5 py-10">
      <Skeleton height={"15rem"} />
      <Skeleton height={72} className="mt-4" />
      <Skeleton height={40} className="mt-10" />
    </div>
  ));

  return (
    <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {skeletonArray}
    </div>
  );
}
