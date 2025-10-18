import { useState, useEffect } from 'react';

function MobileHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show header immediately on mount
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`mobile-glass-header ${isVisible ? 'mobile-glass-header-visible' : ''}`}>
      <div className="mobile-glass-header-container">
        <button 
          onClick={scrollToTop}
          className="mobile-glass-logo"
          aria-label="Back to top"
        >
          <img 
            src="/images/Amelissa-logo-negru.png" 
            alt="Amelissa" 
            className="mobile-glass-logo-image"
          />
        </button>
        
        <div className="mobile-glass-actions">
          <a 
            href="https://www.instagram.com/amelissa.official/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-glass-icon"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          <a 
            href="https://www.tiktok.com/@amelissaofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-glass-icon"
            aria-label="TikTok"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          
          <a 
            href="https://youtu.be/r96b5mtkHrE?si=UgD6DD7HNm-XHHFe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-glass-icon mobile-glass-icon-primary"
            aria-label="Latest Release"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;

