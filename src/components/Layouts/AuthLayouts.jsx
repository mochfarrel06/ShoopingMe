export default function AuthLayouts({children, title, description}) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col w-full px-6 py-12 gap-12 max-[315px]:w-full max-[315px]:gap-10 sm:max-w-sm md:max-w-md lg:max-w-lg lg:px-8 lg:gap-20 xl:max-w-xl">
        <div className="flex flex-col max-[315px]:gap-1 lg:gap-3">
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 max-[315px]:text-lg sm:text-2xl lg:text-3xl">
            {title}
          </h2>
          <p className="text-sm font-medium leading-9 tracking-tight text-gray-500 max-[315px]:text-xs lg:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {children}
          {/* <p className="text-center text-sm text-gray-600 max-[315px]:text-xs lg:text-base">
          Don't have account?{" "}
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </a>
        </p> */}
        </div>
      </div>
    </div>
  );
}
