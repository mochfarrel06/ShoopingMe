import {UserIcon} from "@heroicons/react/20/solid";

export default function ProfileSection() {
  return (
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div>
            <h1 className="font-bold text-3xl tracking-wide text-gray-700 max-[400px]:text-2xl lg:text-4xl">
              Profile
            </h1>
          </div>
          <div className="flex gap-20 overflow-hidden w-full flex-col lg:flex-row lg:items-start">
            <div className="flex items-center justify-center">
              <div className="px-20 py-20 bg-gray-300 flex items-center justify-center rounded-md max-[400px]:w-full max-[400px]:h-full sm:w-1/2 sm:h-1/2 lg:h-72 lg:w-72">
                <UserIcon className="h-14 w-14 text-white" />
              </div>
            </div>
            <div className="flex flex-col gap-6 overflow-hidden lg:w-full">
              <div className="w-full">
                <h3 className="text-gray-700 text-xl font-medium tracking-wide max-[400px]:text-lg lg:text-2xl">
                  Change your personal data
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block">
                  <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                    Name
                  </span>
                  <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                    <input
                      type="text"
                      name="text"
                      className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                      value="John Doe"
                      disabled
                    />
                    <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                      Edit
                    </button>
                  </div>
                </label>
                <label className="block">
                  <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                    Username
                  </span>
                  <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                    <input
                      type="text"
                      name="text"
                      className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                      value="johnd"
                      disabled
                    />
                    <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                      Edit
                    </button>
                  </div>
                </label>
                <label className="block">
                  <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                    Address
                  </span>
                  <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                    <input
                      type="text"
                      name="text"
                      className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                      value="kilcoole, new road, 7682, 12926-3874"
                      disabled
                    />
                    <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                      Edit
                    </button>
                  </div>
                </label>
                <label className="block">
                  <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                    Email
                  </span>
                  <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                    <input
                      type="email"
                      name="email"
                      className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                      value="john@gmail.com"
                      disabled
                    />
                    <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                      Edit
                    </button>
                  </div>
                </label>
                <label className="block">
                  <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                    Phone
                  </span>
                  <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                    <input
                      type="text"
                      name="text"
                      className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                      value="1-570-236-7033"
                      disabled
                    />
                    <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                      Edit
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
