import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use a more performant threshold and margin
    const defaultOptions = {
      threshold: 0.05, // Reduced from 0.1 for earlier trigger
      rootMargin: '50px 0px -50px 0px', // Trigger slightly before entering viewport
      ...options,
    };

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame to batch DOM updates
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          // Once visible, stop observing to free resources
          if (observerRef.current) {
            observerRef.current.unobserve(element);
          }
        }
      },
      defaultOptions
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []); // Remove options dependency to prevent re-creation

  return [elementRef, isVisible];
}


