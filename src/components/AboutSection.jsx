import '../styles/15_about-section.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

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
        </div>

        {/* Gallery - 3 Column Grid */}
        <div className={`about-gallery animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
          <div className={`gallery-item image-reveal ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.5s' }}>
            <img 
              src="/images/amelissa/Photo Session (1).jpg" 
              alt="Amelissa" 
              loading="lazy"
            />
          </div>
          
          <div className={`gallery-item image-reveal ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.6s' }}>
            <img 
              src="/images/amelissa/Photo Session (2).jpg" 
              alt="Amelissa" 
              loading="lazy"
            />
          </div>
          
          <div className={`gallery-item image-reveal ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.7s' }}>
            <img 
              src="/images/amelissa/Photo Session (3).jpg" 
              alt="Amelissa" 
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
