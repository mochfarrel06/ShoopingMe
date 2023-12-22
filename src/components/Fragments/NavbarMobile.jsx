import {Disclosure} from "@headlessui/react";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";

export default function NavbarMobile({children}) {
  return (
    <Disclosure.Panel className="lg:hidden px-2 pb-3 pt-2 sm:px-6 md:px-8 lg:px-4 xl:px-0">
      {children}
    </Disclosure.Panel>
  );
}

function NavbarTitleMobile({navigation, classNames}) {
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

function NavbarProfileMobile({user, userNavigation, isLoggedIn}) {
  return (
    <div className="border-t border-x-gray-700 pt-4">
      {isLoggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <div className="px-3 pb-3">
            <button className="block bg-blue-800 px-4 py-2 rounded font-medium text-lg w-full text-white hover:bg-blue-700 transition-all ease-in-out duration-200">
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
}

NavbarMobile.NavbarTitleMobile = NavbarTitleMobile;
NavbarMobile.NavbarProfileMobile = NavbarProfileMobile;
