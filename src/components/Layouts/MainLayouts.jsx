export default function MainLayouts({children}) {
  return (
    <div className="px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
