function MobileHero() {
  return (
    <section className="mobile-hero">
      {/* Full-screen Hero Image */}
      <div className="mobile-hero-image-container">
        <img 
          src="/images/Homepage copy.jpg" 
          alt="Amelissa" 
          className="mobile-hero-image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Gradient Overlay */}
        <div className="mobile-hero-overlay"></div>
        
        {/* Content Over Image */}
        <div className="mobile-hero-content">
          <div className="mobile-hero-logo">
            <img 
              src="/images/Amelissa Logo alb.png" 
              alt="Amelissa" 
              className="mobile-hero-logo-image"
            />
          </div>
          
          <div className="mobile-hero-tagline">
            <p>SINGER • PERFORMER • STORYTELLER</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="mobile-hero-cta">
            <a 
              href="https://youtu.be/r96b5mtkHrE?si=UgD6DD7HNm-XHHFe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-cta-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
              </svg>
              <span>Latest Release</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileHero;

