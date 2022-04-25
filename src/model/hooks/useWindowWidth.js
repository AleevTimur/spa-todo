import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setwindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
