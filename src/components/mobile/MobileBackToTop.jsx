import { useState, useEffect } from 'react';

function MobileBackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercentage);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`mobile-back-to-top ${isVisible ? 'mobile-back-to-top-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      {/* Progress Ring */}
      <svg className="mobile-back-to-top-progress" viewBox="0 0 60 60">
        <circle
          className="mobile-back-to-top-progress-bg"
          cx="30"
          cy="30"
          r="26"
        />
        <circle
          className="mobile-back-to-top-progress-bar"
          cx="30"
          cy="30"
          r="26"
          style={{
            strokeDasharray: `${scrollProgress * 1.63} 163`
          }}
        />
      </svg>
      
      {/* Arrow Icon */}
      <div className="mobile-back-to-top-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
          <line x1="12" y1="9" x2="12" y2="21"></line>
        </svg>
      </div>
    </button>
  );
}

export default MobileBackToTop;


