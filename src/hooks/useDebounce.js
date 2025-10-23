import { useEffect, useRef } from 'react';

/**
 * Custom hook for debouncing function calls
 * Useful for scroll, resize, and input events
 */
export function useDebounce(callback, delay = 150) {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Return debounced function
  return (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  };
}

/**
 * Custom hook for throttling function calls
 * Ensures function is called at most once per specified interval
 */
export function useThrottle(callback, delay = 150) {
  const lastRun = useRef(Date.now());
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return (...args) => {
    const now = Date.now();
    
    if (now - lastRun.current >= delay) {
      callbackRef.current(...args);
      lastRun.current = now;
    }
  };
}



