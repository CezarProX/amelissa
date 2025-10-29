function MobileAbout() {

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Check if file exists first
      const response = await fetch('/media-kit/Amelissa Media Kit (4).zip', { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, download it
        const link = document.createElement('a');
        link.href = '/media-kit/Amelissa Media Kit (4).zip';
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
    <section className="mobile-about">
      <div className="mobile-section-container">
        
        {/* Latest Release Section */}
        <div className="mobile-latest-release">
          <div className="mobile-latest-release-header">
            <h3 className="mobile-latest-release-title">LATEST RELEASE</h3>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=1LJjUfGEF0M&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-latest-release-card"
          >
            <div className="mobile-latest-release-image-wrapper">
              <img 
                src="/images/covers/bye bye cover.jpeg" 
                alt="Bye Bye - Amelissa"
                className="mobile-latest-release-image"
                loading="eager"
                decoding="async"
              />
              <div className="mobile-latest-release-overlay">
                <div className="mobile-latest-release-play">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mobile-latest-release-info">
              <div className="mobile-latest-release-song-title">Bye Bye</div>
              <div className="mobile-latest-release-type">SINGLE</div>
              <div className="mobile-latest-release-cta">
                <span>Stream Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Section Header */}
        <div className="mobile-section-header">
          <span className="mobile-section-label">Independent Artist</span>
          <h2 className="mobile-section-title">Get to know AMELISSA</h2>
        </div>

        {/* Bio Content - BEFORE GALLERY */}
        <div className="mobile-about-content">
          <div className="mobile-about-text-wrapper">
            <p className="mobile-about-text mobile-about-text-highlight">
              Amelissa is an independent artist whose sound blends pop sensibility with theatrical depth. Her music reflects lived experiences, emotional truth, and the versatility of a performer shaped by both Romanian roots and international stages.
            </p>
          </div>
        </div>
        
        {/* Keywords Section - BEFORE GALLERY */}
        <div className="mobile-about-keywords">
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
        <div className="mobile-media-kit">
          <a 
            href="/media-kit/Amelissa Media Kit (4).zip" 
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

        {/* New Premium Gallery */}
        <div className="mobile-gallery-container">
          <div className="mobile-gallery-scroll">
            
            {/* Card 1 */}
            <div className="mobile-gallery-card">
              <div className="mobile-gallery-card-inner">
                <div className="mobile-gallery-image-wrapper">
                  <img 
                    src="/images/optimized/Photo Session (1)-mobile.webp" 
                    alt="Amelissa performing"
                    loading="lazy"
                    width="600"
                    height="900"
                  />
                </div>
                <div className="mobile-gallery-card-gradient"></div>
                <div className="mobile-gallery-card-badge">01</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mobile-gallery-card">
              <div className="mobile-gallery-card-inner">
                <div className="mobile-gallery-image-wrapper">
                  <img 
                    src="/images/optimized/Photo Session (2)-mobile.webp" 
                    alt="Amelissa portrait"
                    loading="lazy"
                    width="600"
                    height="900"
                  />
                </div>
                <div className="mobile-gallery-card-gradient"></div>
                <div className="mobile-gallery-card-badge">02</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="mobile-gallery-card">
              <div className="mobile-gallery-card-inner">
                <div className="mobile-gallery-image-wrapper">
                  <img 
                    src="/images/optimized/Photo Session (3)-mobile.webp" 
                    alt="Amelissa studio session"
                    loading="lazy"
                    width="600"
                    height="900"
                  />
                </div>
                <div className="mobile-gallery-card-gradient"></div>
                <div className="mobile-gallery-card-badge">03</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="mobile-gallery-card">
              <div className="mobile-gallery-card-inner">
                <div className="mobile-gallery-image-wrapper">
                  <img 
                    src="/images/optimized/Photo Session (4)-mobile.webp" 
                    alt="Amelissa creative shoot"
                    loading="lazy"
                    width="600"
                    height="900"
                  />
                </div>
                <div className="mobile-gallery-card-gradient"></div>
                <div className="mobile-gallery-card-badge">04</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="mobile-gallery-card">
              <div className="mobile-gallery-card-inner">
                <div className="mobile-gallery-image-wrapper">
                  <img 
                    src="/images/optimized/Photo Session-mobile.webp" 
                    alt="Amelissa backstage"
                    loading="lazy"
                    width="600"
                    height="900"
                  />
                </div>
                <div className="mobile-gallery-card-gradient"></div>
                <div className="mobile-gallery-card-badge">05</div>
              </div>
            </div>

          </div>
          
          {/* Scroll Hint */}
          <div className="mobile-gallery-hint">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span>Swipe to explore</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default MobileAbout;
