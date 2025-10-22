import { useEffect } from 'react';

/**
 * Hook to optimize scroll performance
 * Disables pointer events during scroll and adds passive event listeners
 */
export function useScrollPerformance() {
  useEffect(() => {
    let scrollTimer = null;
    let isScrolling = false;

    const handleScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true;
        // Disable pointer events during scroll for better performance
        document.body.style.pointerEvents = 'none';
      }

      // Clear the previous timer
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      // Set a new timer to re-enable pointer events after scrolling stops
      scrollTimer = setTimeout(() => {
        isScrolling = false;
        document.body.style.pointerEvents = 'auto';
      }, 150);
    };

    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScrollStart, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      document.body.style.pointerEvents = 'auto';
    };
  }, []);
}


