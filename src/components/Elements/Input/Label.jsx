export default function Label({children, htmlFor}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900 max-[315px]:text-xs lg:text-base"
    >
      {children}
    </label>
  );
}
