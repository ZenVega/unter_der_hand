import { useEffect, useRef } from "react";

const useHeroInView = () => {
  const heroInViewRef = useRef(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      heroInViewRef.current = entry.isIntersecting;
    }, options);

    const target = document.querySelector("#hero");

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return heroInViewRef;
};

export default useHeroInView;
