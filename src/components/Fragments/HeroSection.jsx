import Button from "../Elements/Button/Button";

export default function HeroSection({children}) {
  return (
    <div className="py-48 max-[400px]:py-36 md:py-56 lg:py-64">{children}</div>
  );
}

function Header({btnTitle, description}) {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        {description}{" "}
        <a href="#" className="font-semibold text-blue-800">
          <span className="absolute inset-0" aria-hidden="true" />
          {btnTitle}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
function Body({title, description}) {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-700 max-[400px]:text-3xl sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-500 max-[400px]:text-sm max-w-2xl">
        {description}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Button
        bgcolor={"bg-blue-800"}
        txtcolor={"text-white"}
        hoverBg={"hover:bg-blue-700"}
        hoverTxt={"hover:text-white"}
        padX={"px-4"}
        padY={"py-2.5"}
      >
        Shop Now
      </Button>
      <Button
        bgcolor={"bg-white"}
        txtcolor={"text-gray-800"}
        hoverBg={"hover:bg-gray-100"}
        hoverTxt={"hover:text-gray-800"}
        padX={"px-4"}
        padY={"py-2.5"}
      >
        Learn more <span aria-hidden="true">→</span>
      </Button>
    </div>
  );
}

HeroSection.Header = Header;
HeroSection.Body = Body;
HeroSection.Footer = Footer;
