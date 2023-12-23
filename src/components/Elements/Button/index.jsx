import React from "react";

export default function Button({
  children,
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      type={type}
      className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 max-[315px]:text-xs lg:text-base lg:py-2"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
