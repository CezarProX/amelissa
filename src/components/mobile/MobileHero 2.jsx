import { Music, Play, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

const MobileHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="mobile-hero">
      {/* Background Image */}
      <div className="mobile-hero__background">
        <img 
          src="/images/Homepage copy.jpg" 
          alt="Amelissa" 
          className="mobile-hero__image"
        />
        <div className="mobile-hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="mobile-hero__content">
        {/* Logo/Brand */}
        <div className="mobile-hero__brand">
          <Music className="mobile-hero__brand-icon" />
          <h1 className="mobile-hero__title">AMELISSA</h1>
        </div>

        {/* Tagline */}
        <p className="mobile-hero__tagline">
          Vocal Artist • Songwriter • Performer
        </p>

        {/* CTA Buttons */}
        <div className="mobile-hero__actions">
          <button 
            className="mobile-hero__btn mobile-hero__btn--primary"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Play className="mobile-hero__btn-icon" />
            Listen Now
          </button>
          <button className="mobile-hero__btn mobile-hero__btn--secondary">
            Latest Release
          </button>
        </div>

        {/* Social Links */}
        <div className="mobile-hero__social">
          <a href="#" className="mobile-hero__social-link" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" className="mobile-hero__social-link" aria-label="YouTube">
            <Youtube />
          </a>
          <a href="#" className="mobile-hero__social-link" aria-label="TikTok">
            <Music />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mobile-hero__scroll">
          <div className="mobile-hero__scroll-line"></div>
          <span className="mobile-hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;

