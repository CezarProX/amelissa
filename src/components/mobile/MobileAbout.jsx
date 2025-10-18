import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function MobileAbout() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="mobile-about" ref={ref}>
      <div className={`mobile-section-container mobile-section-fade ${isVisible ? 'mobile-section-visible' : ''}`}>
        
        {/* Section Header */}
        <div className="mobile-section-header">
          <span className="mobile-section-label">Independent Artist</span>
          <h2 className="mobile-section-title">Get to know AMELISSA</h2>
        </div>

        {/* Bio Content - BEFORE GALLERY */}
        <div className="mobile-about-content">
          <div className={`mobile-about-text-wrapper ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p className="mobile-about-text mobile-about-text-highlight">
              Amelissa is an independent artist whose sound blends pop sensibility with theatrical depth. Her music reflects lived experiences, emotional truth, and the versatility of a performer shaped by both Romanian roots and international stages.
            </p>
          </div>
        </div>
        
        {/* Keywords Section - BEFORE GALLERY */}
        <div className={`mobile-about-keywords ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <div className="mobile-keyword-item">
            <span className="mobile-keyword-dot"></span>
            <span className="mobile-keyword-text">Authenticity</span>
          </div>
          <div className="mobile-keyword-item">
            <span className="mobile-keyword-dot"></span>
            <span className="mobile-keyword-text">Versatility</span>
          </div>
          <div className="mobile-keyword-item">
            <span className="mobile-keyword-dot"></span>
            <span className="mobile-keyword-text">Emotion</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`mobile-about-gallery ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="mobile-gallery-large">
            <div className="mobile-gallery-wrapper">
              <img 
                src="/images/amelissa/Photo Session (1).jpg" 
                alt="Amelissa performing"
                loading="lazy"
              />
              <div className="mobile-gallery-overlay"></div>
            </div>
          </div>
          <div className="mobile-gallery-small-group">
            <div className="mobile-gallery-small">
              <div className="mobile-gallery-wrapper">
                <img 
                  src="/images/amelissa/Photo Session (2).jpg" 
                  alt="Amelissa portrait"
                  loading="lazy"
                />
                <div className="mobile-gallery-overlay"></div>
              </div>
            </div>
            <div className="mobile-gallery-small">
              <div className="mobile-gallery-wrapper">
                <img 
                  src="/images/amelissa/Photo Session (3).jpg" 
                  alt="Amelissa studio"
                  loading="lazy"
                />
                <div className="mobile-gallery-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links - BELOW GALLERY */}
        <div className="mobile-social-section">
          <p className="mobile-social-title">Follow the Journey</p>
          <div className="mobile-social-grid">
            <a 
              href="https://www.instagram.com/amelissa.official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mobile-social-card mobile-social-instagram ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.5s' }}
              aria-label="Instagram"
            >
              <div className="mobile-social-card-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="mobile-social-card-label">Instagram</span>
              </div>
            </a>
            <a 
              href="https://www.tiktok.com/@amelissaofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mobile-social-card mobile-social-tiktok ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.6s' }}
              aria-label="TikTok"
            >
              <div className="mobile-social-card-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                <span className="mobile-social-card-label">TikTok</span>
              </div>
            </a>
            <a 
              href="https://www.facebook.com/AMELISSA.OFFICIAL" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mobile-social-card mobile-social-facebook ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.7s' }}
              aria-label="Facebook"
            >
              <div className="mobile-social-card-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="mobile-social-card-label">Facebook</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAbout;
