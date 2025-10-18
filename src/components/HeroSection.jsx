import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="hero-section-modern hero-animate-enter" ref={ref}>
      {/* Background Image Container */}
      <div className="hero-background-image hero-bg-animate"></div>
      
      {/* Mobile Hero Image - Visible only on small screens */}
      <div className="hero-mobile-image">
        <img 
          src="/images/Homepage copy.jpg" 
          alt="Amelissa" 
          className="hero-mobile-img"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        
        {/* Tagline Overlay - Positioned over image on mobile */}
        <div className="hero-tagline-section">
          <div className="container">
            <h2 className="hero-tagline">
              SINGER • PERFORMER • STORYTELLER THROUGH MUSIC
            </h2>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row row-40 align-items-start">
          {/* Left Column - Biography */}
          <div className={`col-sm-6 col-xl-3 hero-card-animate animate-on-scroll ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            {/* Biography Card */}
            <div className="modern-card modern-card-featured bio-card">
              <h3 className="bio-card-title">THE STORY SO FAR</h3>
              <p className="bio-card-text">
                From a small town in Romania to the spotlight of Manchester and back again — Amelissa's journey is a mix of folklore roots, pop beats, and fearless storytelling. Every song she writes carries a piece of where she's been — and where she's headed next.
              </p>
              <div className="bio-social-links">
                <a 
                  href="https://www.facebook.com/AMELISSA.OFFICIAL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bio-social-link"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/amelissa.official/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bio-social-link"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@amelissaofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bio-social-link"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Media */}
          <div className={`col-sm-6 col-xl-3 offset-xl-6 hero-card-animate animate-on-scroll ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.4s' }}>
            {/* Latest Release Headline */}
            <div className="media-section-headline">
              <h3 className="media-headline-text">LATEST RELEASE</h3>
            </div>

            {/* Release Card 1 */}
            <div className={`modern-card modern-card-media hero-media-card-animate animate-on-scroll ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://youtu.be/r96b5mtkHrE?si=UgD6DD7HNm-XHHFe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="media-card-link"
              >
                <div className="media-card-image-wrapper">
                  <img 
                    src="/images/Cover Piesa 1.jpg" 
                    alt="Not Fair - Amelissa" 
                    className="media-card-image"
                  />
                  <div className="media-card-overlay">
                    <div className="media-info">
                      <div className="media-artist">Amelissa</div>
                      <div className="media-title">&quot;Not Fair&quot;</div>
                    </div>
                    <div className="media-play-button">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <div className="media-card-info">
                <h4 className="media-card-title">Not Fair</h4>
                <p className="media-card-subtitle">Single</p>
              </div>
              <a className="media-card-footer" href="https://youtu.be/r96b5mtkHrE?si=UgD6DD7HNm-XHHFe" target="_blank" rel="noopener noreferrer">
                <span>Stream Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Release Card 2 */}
            <div className={`modern-card modern-card-media hero-media-card-animate animate-on-scroll ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.8s' }}>
              <a 
                href="https://youtu.be/73dvWTHMQ6Y?si=67xv9aW-qaqZ5Rv1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="media-card-link"
              >
                <div className="media-card-image-wrapper">
                  <img 
                    src="/images/Cover 2nd Song 1080x1080.png" 
                    alt="Second Release - Amelissa" 
                    className="media-card-image"
                  />
                  <div className="media-card-overlay">
                    <div className="media-info">
                      <div className="media-artist">Amelissa x Topsy Crettz</div>
                      <div className="media-title">&quot;Gel Bana (Come To Me)&quot;</div>
                    </div>
                    <div className="media-play-button">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <div className="media-card-info">
                <h4 className="media-card-title">Gel Bana (Come To Me)</h4>
                <p className="media-card-subtitle">Amelissa x Topsy Crettz</p>
              </div>
              <a className="media-card-footer" href="https://youtu.be/73dvWTHMQ6Y?si=67xv9aW-qaqZ5Rv1" target="_blank" rel="noopener noreferrer">
                <span>Watch Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

