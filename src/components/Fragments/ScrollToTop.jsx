import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scroll(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
