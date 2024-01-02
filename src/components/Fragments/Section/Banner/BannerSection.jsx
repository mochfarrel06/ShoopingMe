export default function BannerSection({children}) {
  return (
    <div className="py-10 max-[400px]:py-8 sm:py-14 md:py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 bg-gray-100 rounded-md sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center gap-16 justify-center text-center py-16">
          {children}
        </div>
      </div>
    </div>
  );
}

function Header({title, description}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-semibold text-xl tracking-wide text-gray-800 max-[400px]:text-lg md:text-2xl lg:text-3xl">
        {title}
      </h4>
      <p className="font-medium text-sm text-gray-500 max-[400px]:text-xs lg:text-base">
        {description}
      </p>
    </div>
  );
}

function Footer({btnTitle}) {
  return (
    <div className="flex items-center overflow-hidden rounded-md">
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full border-0 text-sm px-5 py-2 text-gray-800 sm:leading-6 outline-none lg:py-4 lg:text-base"
        placeholder="Input your email"
      />
      <button className="block border-0 px-3 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-500 lg:px-8 lg:py-4 lg:text-base">
        {btnTitle}
      </button>
    </div>
  );
}

BannerSection.Header = Header;
BannerSection.Footer = Footer;
