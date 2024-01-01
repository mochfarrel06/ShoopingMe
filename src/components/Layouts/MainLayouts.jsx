import {useEffect, useRef} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useLocation} from "react-router-dom";
import ScrollToTop from "../Fragments/ScrollToTop";

export default function MainLayouts({children}) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="px-6 py-14 lg:px-8 min-h-screen">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
      <Footer />
    </>
  );
}
