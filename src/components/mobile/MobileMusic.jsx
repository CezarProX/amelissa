import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function MobileMusic() {
  const [ref, isVisible] = useIntersectionObserver();

  const releases = [
    {
      id: 1,
      title: "Drink Up",
      artist: "Amelissa",
      type: "Single",
      image: "/images/covers/Cover drink up .png",
      link: "https://www.youtube.com/watch?v=ycycsq8HviM&list=OLAK5uy_lZirJgO5BiCMyaLJ0M9Hl5sgtIjHkUc0c",
      badge: null
    },
    {
      id: 2,
      title: "Dedim Sana",
      artist: "Amelissa",
      type: "Single",
      image: "/images/covers/Cover dedim sana.png",
      link: "https://www.youtube.com/watch?v=kahjpxAWJxE&list=OLAK5uy_kPMy_XJCKXU9GU-4F_RkY58-dPiNZr4vs",
      badge: null
    },
    {
      id: 3,
      title: "For the First Time",
      artist: "Amelissa",
      type: "Single",
      image: "/images/covers/Cover for the first time.png",
      link: "https://www.youtube.com/watch?v=KMCn6aV_pvE&list=OLAK5uy_mbfz5sQ2OLSeHfp0XV50VFtqbNWDRgwMI",
      badge: null
    }
  ];

  return (
    <section className="mobile-music" ref={ref}>
      <div className={`mobile-section-container mobile-section-fade ${isVisible ? 'mobile-section-visible' : ''}`}>
        {/* Section Header */}
        <div className="mobile-section-header">
          <span className="mobile-section-label">Listen Now</span>
          <h2 className="mobile-section-title">Music Releases</h2>
        </div>
        
        {/* Music Cards */}
        <div className="mobile-music-grid">
          {releases.map((release, index) => (
            <div 
              key={release.id} 
              className="mobile-music-card"
              style={{ animationDelay: `${0.5 + index * 0.15}s` }}
            >
              <a 
                href={release.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-music-link"
              >
                {/* Image Container */}
                <div className="mobile-music-image-wrapper">
                  <img 
                    src={release.image} 
                    alt={release.title}
                    className="mobile-music-image"
                    loading="lazy"
                    decoding="async"
                  />
                  {release.badge && (
                    <span className="mobile-music-badge">{release.badge}</span>
                  )}
                  <div className="mobile-music-overlay">
                    <div className="mobile-play-button">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card Info */}
                <div className="mobile-music-info">
                  <h3 className="mobile-music-title">{release.title}</h3>
                  <p className="mobile-music-artist">{release.artist}</p>
                  <span className="mobile-music-type">{release.type}</span>
                </div>
              </a>
              
              {/* Stream Button */}
              <a 
                href={release.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-music-button"
              >
                <span>Listen Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MobileMusic;

