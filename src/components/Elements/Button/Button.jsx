export default function Button({
  children,
  bgcolor,
  hoverBg,
  txtcolor,
  padX,
  padY,
  hoverTxt,
}) {
  return (
    <button
      className={`rounded-md ${bgcolor} ${txtcolor} ${padX} ${padY} text-sm font-semibold shadow-sm ${hoverBg} ${hoverTxt} transition-all ease-in-out duration-300 max-[400px]:text-xs lg:px-6 lg:text-base`}
    >
      {children}
    </button>
  );
}
