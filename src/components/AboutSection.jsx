import '../styles/15_about-section.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Check if file exists first
      const response = await fetch('/media-kit/amelissa-media-kit.zip', { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, download it
        const link = document.createElement('a');
        link.href = '/media-kit/amelissa-media-kit.zip';
        link.download = 'amelissa-media-kit.zip';
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
    <section className="about-section-clean" ref={ref}>
      <div className="about-container">
        
        {/* Header - Centered */}
        <div className={`about-header animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
          <div className="about-badge" style={{ animationDelay: '0.1s' }}>
            <span className="badge-text">Independent Artist</span>
          </div>
          
          <h2 className="about-title" style={{ animationDelay: '0.2s' }}>
            Get to know <span className="about-title-accent">AMELISSA</span>
          </h2>
          
          <p className="about-description" style={{ animationDelay: '0.3s' }}>
            Amelissa is an independent artist whose sound blends pop sensibility with theatrical depth. 
            Her music reflects lived experiences, emotional truth, and the versatility of a performer 
            shaped by both Romanian roots and international stages.
          </p>

          {/* Keywords */}
          <div className="about-keywords" style={{ animationDelay: '0.4s' }}>
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
          <div className="about-media-kit" style={{ animationDelay: '0.45s' }}>
            <a 
              href="/media-kit/amelissa-media-kit.zip" 
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

        {/* Gallery - 3 Column Grid */}
        <div className={`about-gallery animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
          <div className={`gallery-item image-reveal ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.5s' }}>
            <img 
              src="/images/amelissa/Photo Session (1).jpg" 
              alt="Amelissa" 
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
          
          <div className={`gallery-item image-reveal ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.6s' }}>
            <img 
              src="/images/amelissa/Photo Session (2).jpg" 
              alt="Amelissa" 
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
          
          <div className={`gallery-item image-reveal ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.7s' }}>
            <img 
              src="/images/amelissa/Photo Session (3).jpg" 
              alt="Amelissa" 
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
