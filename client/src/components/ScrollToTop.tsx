import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // change to "smooth" if you want smooth scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
