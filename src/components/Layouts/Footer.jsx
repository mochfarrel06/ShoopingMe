import {ShoppingBagIcon} from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl lg:w-full">
      <div className="px-4 pb-10 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="py-10 flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-0.5 max-[400px]:gap-0">
              <ShoppingBagIcon className="h-4 w-4 text-blue-900 max-[400px]:h-5 max-[400px]:w-5 lg:w-6 lg:h-6" />
              <h4 className="font-bold text-base text-blue-900 tracking-wide max-[400px]:text-base md:text-xl">
                ShoppingMe
              </h4>
            </div>
            <p className="text-gray-500 text-sm tracking-wide font-normal lg:w-3/4">
              Find the convenience of shopping for your favorite items quickly
              and safely in our online shop.
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-base text-gray-700 tracking-wide">
                Link
              </h5>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Men clothing
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Women clothing
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Jewelery
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Electronics
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-base text-gray-700 tracking-wide">
                Product
              </h5>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Clothing
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-base text-gray-700 tracking-wide">
                About Us
              </h5>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  News blog
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-base text-gray-700 tracking-wide">
                Help
              </h5>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm tracking-wide hover:text-gray-700"
                >
                  Social Media
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <p className="text-xs font-medium text-gray-700 tracking-wide md:text-sm lg:text-base">
            Copyright @ 2023 - All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
