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
        </div>
      </div>
    </section>
  );
}

export default MobileHero;

