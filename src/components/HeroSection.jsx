function HeroSection() {
  return (
    <div className="hero-section-modern">
      {/* Background Image Container */}
      <div className="hero-background-image"></div>
      
      {/* Mobile Hero Image - Visible only on small screens */}
      <div className="hero-mobile-image">
        <img 
          src="/images/Homepage copy.jpg" 
          alt="Amelissa" 
          className="hero-mobile-img"
          loading="eager"
          decoding="async"
          fetchPriority="high"
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
          <div className="col-sm-6 col-xl-3">
            {/* Biography Card */}
            <div className="modern-card modern-card-featured bio-card">
              <h3 className="bio-card-title">THE STORY BEHIND</h3>
              <p className="bio-card-text">
                From a small town in Romania to the spotlight of Manchester and back again — Amelissa's journey is a mix of folklore roots, pop beats, and fearless storytelling. Every song she writes carries a piece of where she's been — and where she's headed next.
              </p>
            </div>
            
            {/* Social Links Below Card */}
            <div className="hero-social-links">
              <a 
                href="https://www.facebook.com/share/1B2joM99dW/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Facebook"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/amelissa.official?igsh=MXRiMjZxdXh2aG45MQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Instagram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@amelissaofficial?_t=ZN-90kvRGqzBYM&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="TikTok"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@amelissaofficial?si=1tgzOM9QQNCByyBQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="YouTube"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Media */}
          <div className="col-sm-6 col-xl-3 offset-xl-6">
            {/* Latest Release Headline */}
            <div className="media-section-headline">
              <h3 className="media-headline-text">LATEST RELEASE</h3>
            </div>

            {/* Release Card 1 */}
            <div className="modern-card modern-card-media">
              <a 
                href="https://www.youtube.com/watch?v=1LJjUfGEF0M&feature=youtu.be" 
                target="_blank" 
                rel="noopener noreferrer"
                className="media-card-link"
              >
                <div className="media-card-image-wrapper">
                  <img 
                    src="/images/covers/bye bye cover.jpeg" 
                    alt="Bye Bye - Amelissa" 
                    className="media-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="media-card-overlay">
                    <div className="media-info">
                      <div className="media-artist">Amelissa</div>
                      <div className="media-title">&quot;Bye Bye&quot;</div>
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
                <h4 className="media-card-title">Bye Bye</h4>
                <p className="media-card-subtitle">Single</p>
              </div>
              <a className="media-card-footer" href="https://www.youtube.com/watch?v=1LJjUfGEF0M&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                <span>Stream Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Release Card 2 */}
            <div className="modern-card modern-card-media">
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
                    loading="lazy"
                    decoding="async"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

