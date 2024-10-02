"use client"
import React, { useState, useEffect } from "react";
import useHeroInView from "@/utils/hooks/useHeroInView";

interface props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: props) => {
  const heroInViewRef = useHeroInView();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(!heroInViewRef.current); 
    };

    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [heroInViewRef]);

  return (
    <div className="max-w-5xl m-auto">
        <a
          href="#hero"
          className={`fixed bottom-8 z-20 right-8 flex min-w-10 max-h-6 justify-center gap-2 bg-udh_yellow text-udh_dark_green border border-2 border-udh_dark_green px-2 rounded-lg transition-opacity duration-300 ${
            showScrollTop ? "opacity-100 " : "opacity-0"
          }`}
        >
          <span className="text-xl font-bold">^</span>
        </a>
    {children}</div>);
};

export default PageWrapper;
