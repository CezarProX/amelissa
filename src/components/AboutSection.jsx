import '../styles/15_about-section.css';

function AboutSection() {

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
    <section className="about-section-clean">
      <div className="about-container">
        
        {/* Header - Centered */}
        <div className="about-header">
          <div className="about-badge">
            <span className="badge-text">Independent Artist</span>
          </div>
          
          <h2 className="about-title">
            Get to know <span className="about-title-accent">AMELISSA</span>
          </h2>
          
          <p className="about-description">
            Amelissa is an independent artist whose sound blends pop sensibility with theatrical depth. 
            Her music reflects lived experiences, emotional truth, and the versatility of a performer 
            shaped by both Romanian roots and international stages.
          </p>

          {/* Keywords */}
          <div className="about-keywords">
            <div className="keyword-item">
              <div className="keyword-dot"></div>
              <span className="keyword-label">Authenticity</span>
            </div>
            <div className="keyword-item">
              <div className="keyword-dot"></div>
              <span className="keyword-label">Versatility</span>
            </div>
            <div className="keyword-item">
              <div className="keyword-dot"></div>
              <span className="keyword-label">Emotion</span>
            </div>
          </div>

          {/* Media Kit Button */}
          <div className="about-media-kit">
            <a 
              href="/media-kit/Amelissa Media Kit (4).zip" 
              onClick={handleDownload}
              className="media-kit-button"
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
        </div>

        {/* Premium Gallery Grid */}
        <div className="about-gallery-premium">
          {/* Main Featured Image - Large */}
          <div className="gallery-featured">
            <div className="gallery-card">
              <img 
                src="/images/optimized/Photo Session (1)-desktop.webp" 
                alt="Amelissa performing"
                loading="lazy"
                decoding="async"
                width="800"
                height="1200"
              />
              <div className="gallery-overlay">
                <span className="gallery-number">01</span>
              </div>
            </div>
          </div>

          {/* Grid of 4 Images */}
          <div className="gallery-grid">
            <div className="gallery-card">
              <img 
                src="/images/optimized/Photo Session (2)-desktop.webp" 
                alt="Amelissa portrait"
                loading="lazy"
                decoding="async"
                width="800"
                height="1200"
              />
              <div className="gallery-overlay">
                <span className="gallery-number">02</span>
              </div>
            </div>

            <div className="gallery-card">
              <img 
                src="/images/optimized/Photo Session (3)-desktop.webp" 
                alt="Amelissa studio session"
                loading="lazy"
                decoding="async"
                width="800"
                height="1200"
              />
              <div className="gallery-overlay">
                <span className="gallery-number">03</span>
              </div>
            </div>

            <div className="gallery-card">
              <img 
                src="/images/optimized/Photo Session (4)-desktop.webp" 
                alt="Amelissa creative shoot"
                loading="lazy"
                decoding="async"
                width="800"
                height="1200"
              />
              <div className="gallery-overlay">
                <span className="gallery-number">04</span>
              </div>
            </div>

            <div className="gallery-card">
              <img 
                src="/images/optimized/Photo Session-desktop.webp" 
                alt="Amelissa backstage"
                loading="lazy"
                decoding="async"
                width="800"
                height="1200"
              />
              <div className="gallery-overlay">
                <span className="gallery-number">05</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
