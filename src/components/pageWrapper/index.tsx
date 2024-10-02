"use client"
import React, { useState, useEffect } from "react";
import { Icon } from "@components/icon"
import { colors } from "@/utils/colors";
import useHeroInView from "@/utils/hooks/useHeroInView";

interface props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: props) => {
  const heroInViewRef = useHeroInView();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(!heroInViewRef.current); // Show button when #hero is not in view
    };

    window.addEventListener("scroll", handleScroll); // Listen to scroll events

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, [heroInViewRef]);

  return (
    <div className="max-w-5xl m-auto">
      <a
      href="#hero"
      className={`fixed bottom-8 z-20 right-8 flex min-w-8 min-h-4 justify-center gap-2 bg-udh_yellow text-udh_dark_green border border-2 border-udh_dark_green px-2 rounded-lg transition-opacity duration-500 ${showScrollTop? "opacity-100" : "opacity-0"}`}
      >
        <Icon name="chevron-up" color={colors["udh_dark_green"]} />
      </a>
    {children}</div>);
};

export default PageWrapper;
