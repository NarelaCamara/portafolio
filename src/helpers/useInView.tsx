// hooks/useInView.ts
import { useState, useEffect, MutableRefObject } from "react";

const useInView = (ref: MutableRefObject<Element | null>): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.1 } // Puedes ajustar el threshold según tus necesidades
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return isInView;
};

export default useInView;
