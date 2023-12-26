import {useContext} from "react";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../context/DarkMode";

export default function AuthLayouts({children, title, description, type}) {
  const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext);
  console.log(isDarkMode);

  return (
    <div
      className={`flex min-h-screen justify-center items-center py-32 relative ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <button
        className="absolute right-2 top-40 bg-blue-800 p-2 text-white rounded-md"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
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
          <p className="text-center text-sm text-gray-600 max-[315px]:text-xs lg:text-base">
            {type === "login"
              ? 'Dont"t have an account ?'
              : "Already have an account ?"}{" "}
            {type === "login" && (
              <Link
                to="/register"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            )}
            {type === "register" && (
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
