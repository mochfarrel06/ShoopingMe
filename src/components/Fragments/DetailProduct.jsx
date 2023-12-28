export default function DetailProduct({children}) {
  return (
    <div className="py-20 max-[400px]:py-10 sm:py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  );
}
