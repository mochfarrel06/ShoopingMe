import React from "react";

export default function ProductNotFound({children}) {
  return (
    <div className="flex items-center justify-center h-full py-14">
      <div className="text-center">{children}</div>
    </div>
  );
}

function Header() {
  return (
    <img
      src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527124.jpg?w=740&t=st=1703909498~exp=1703910098~hmac=44eae36680514de5f36762fd2afb14a0a7e1b590ebccea82ab779e5aa083234a"
      alt="Product Not Found"
      className="w-full max-w-xs mx-auto rounded-md"
    />
  );
}

function Footer({title, description}) {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-medium text-gray-600 md:text-2xl lg:mt-4">
        {title}
      </h1>
      <p className="text-gray-500 mt-2 text-sm md:text-base">{description}</p>
    </div>
  );
}

ProductNotFound.Header = Header;
ProductNotFound.Footer = Footer;
