"use client";
import { useState, useLayoutEffect } from "react";

const useIsMobile = (mobileWidth = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobileDevice = () => {
      setIsMobile(window.innerWidth <= mobileWidth);
    };

    checkMobileDevice();

    window.addEventListener("resize", checkMobileDevice);

    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, [mobileWidth]);

  return isMobile;
};

export default useIsMobile;
