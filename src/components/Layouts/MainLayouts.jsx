import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayouts({children}) {
  return (
    <>
      <Navbar />
      <div className="px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
      <Footer />
    </>
  );
}
