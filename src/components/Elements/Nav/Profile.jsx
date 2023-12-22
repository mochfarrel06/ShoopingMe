import {Disclosure, Menu, Transition} from "@headlessui/react";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";

export function ProfileMain({user, userNavigation, classNames}) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full xl:h-10 xl:w-10"
            src={user.imageUrl}
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-56 lg:py-3">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({active}) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 lg:text-base"
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function ProfileMobile({userNavigation}) {
  return (
    <div className="border-t border-x-gray-700 pt-4">
      <div className="flex items-center justify-between px-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full max-[400px]:h-8 max-[400px]:w-8"
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-base font-medium leading-none text-gray-700 max-[400px]:text-sm">
              {user.name}
            </div>
            <div className="text-sm font-medium leading-none text-gray-400 max-[400px]:text-xs">
              {user.email}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="relative flex-shrink-0 rounded-full bg-gray-800 p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <ShoppingCartIcon
            className="h-5 w-5 max-[400px]:h-4 max-[400px]:w-4"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        {userNavigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white max-[400px]:text-sm"
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </div>
  );
}
