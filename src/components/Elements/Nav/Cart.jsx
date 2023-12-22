import {ShoppingCartIcon} from "@heroicons/react/20/solid";

export default function Cart() {
  return (
    <button
      type="button"
      className="relative rounded-full bg-white p-1 text-gray-900 hover:text-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View cart</span>
      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
