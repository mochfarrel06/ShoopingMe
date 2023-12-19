import React from "react";

export default function Input({type, name, placeholder}) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      autoComplete="current-password"
      required
      className="block w-full text-sm rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 max-[315px]:text-xs sm:text-sm sm:leading-6"
      placeholder={placeholder}
    />
  );
}
