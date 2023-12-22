import { Disclosure } from "@headlessui/react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

export function MenuMain({navigation, classNames}) {
  return (
    <div className="flex items-center gap-10">
      <div className="hidden lg:block">
        <div className="flex items-baseline space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium lg:text-base"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 max-[400px]:h-4 max-[400px]:w-4" />
        </span>
        <input
          className="placeholder:text-slate-400 block text-sm bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 max-[400px]:text-xs lg:text-base xl:text-lg"
          placeholder="Search product"
          type="text"
          name="search"
        />
      </label>
    </div>
  );
}

export function NavigationMobile({navigation, classNames}){
  return (
    <div className="flex flex-col gap-2 pb-3">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium max-[400px]:text-sm"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
}