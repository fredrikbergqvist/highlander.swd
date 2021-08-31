import { useEffect } from "react";

export const useIntersectionObserver = (
  callback: (arg0: Array<any>) => unknown,
  options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
  },
  reference: HTMLElement | null = null,
  additionalDependencies: unknown[] = []
): void => {
  const dependencyArray = [callback, reference, ...additionalDependencies];
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (reference) {
      observer.observe(reference);
    }
    return () => {
      if (reference) {
        observer.unobserve(reference);
      }
    };
  }, dependencyArray);
};
