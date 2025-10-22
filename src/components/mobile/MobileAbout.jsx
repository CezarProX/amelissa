import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function MobileAbout() {
  const [ref, isVisible] = useIntersectionObserver();

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Check if file exists first
      const response = await fetch('/kit media/KIT Media Oct 22 2025 (1).zip', { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, download it
        const link = document.createElement('a');
        link.href = '/kit media/KIT Media Oct 22 2025 (1).zip';
        link.download = 'Amelissa-Media-Kit.zip';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      } else {
        // File doesn't exist
        alert('Media Kit will be available soon. Please check back later!');
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Media Kit will be available soon. Please check back later!');
    }
  };

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
            <span className="mobile-keyword-text">AUTHENTICITY</span>
          </div>
          <div className="mobile-keyword-item">
            <span className="mobile-keyword-text">VERSATILITY</span>
          </div>
          <div className="mobile-keyword-item">
            <span className="mobile-keyword-text">EMOTION</span>
          </div>
        </div>

        {/* Media Kit Button */}
        <div className={`mobile-media-kit ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.35s' }}>
          <a 
            href="/kit media/KIT Media Oct 22 2025 (1).zip" 
            onClick={handleDownload}
            className="mobile-media-kit-button"
            aria-label="Download Media Kit"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download Media Kit</span>
          </a>
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
        
      </div>
    </section>
  );
}

export default MobileAbout;
