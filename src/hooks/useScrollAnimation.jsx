import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    
    const observeElements = () => {
      const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
      textElements.forEach((element) => {
        if (!element.classList.contains("fade-in-up")) {
          observer.observe(element);
        }
      });
    };

    // Initial observation
    observeElements();
    const intervalId = setInterval(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);
};

export default useScrollAnimation;