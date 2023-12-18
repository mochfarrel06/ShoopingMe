import {GoSearch} from "react-icons/go";
import Input from "./Input";

export function InputSearch() {
  return (
    <form className="group relative flex">
      <Input />
      <GoSearch
        size={18}
        className="absolute right-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-slate-500"
      />
    </form>
  );
}
