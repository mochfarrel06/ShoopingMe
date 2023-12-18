import React from "react";

export default function Input() {
  return (
    <input
      className="focus:ring-2 focus:ring-slate-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-3 ring-1 ring-slate-300 shadow-sm"
      type="text"
      placeholder="Search products..."
    />
  );
}
