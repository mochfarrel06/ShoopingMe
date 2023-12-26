export default function HeroSection() {
  return (
    <div className="py-48 max-[400px]:py-36 md:py-56 lg:py-64">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Shop more easily, quickly, securely and best-selling transactions
          here.{" "}
          <a href="#" className="font-semibold text-blue-800">
            <span className="absolute inset-0" aria-hidden="true" />
            Shop now<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-700 max-[400px]:text-3xl sm:text-5xl lg:text-6xl">
          Shop for goods easily
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500 max-[400px]:text-sm max-w-2xl">
          Find the convenience of shopping for your favorite items quickly and
          safely in our online shop. An easy, practical and satisfying shopping
          experience only here!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 max-[400px]:text-xs lg:px-6 lg:text-base"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 max-[400px]:text-xs lg:px-6 lg:text-base"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
