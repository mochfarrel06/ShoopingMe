import {ShoppingBagIcon} from "@heroicons/react/20/solid";

export default function Title({children}) {
  return (
    <div className="flex items-center gap-0.5 max-[400px]:gap-0">
      <ShoppingBagIcon className="h-6 w-6 text-blue-900 max-[400px]:h-5 max-[400px]:w-5 lg:w-7 lg:h-7 xl:h-8 xl:w-8" />
      <h1 className="font-bold text-lg text-blue-900 tracking-wide max-[400px]:text-base md:text-xl xl:text-2xl">
        {children}
      </h1>
    </div>
  );
}
