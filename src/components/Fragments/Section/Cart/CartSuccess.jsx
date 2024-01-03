import {Link} from "react-router-dom";

export default function CartSuccess() {
  return (
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="w-full py-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold text-gray-600">
            Pembayaran anda sukses
          </h1>
          <Link
            to="/"
            className="bg-blue-700 mt-10 px-4 py-3 text-sm rounded-md text-white font-medium hover:bg-blue-600 transition-all ease-in-out duration-300"
          >
            Kembali ke home
          </Link>
        </div>
      </div>
    </div>
  );
}
