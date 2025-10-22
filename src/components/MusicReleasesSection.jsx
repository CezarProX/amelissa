import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/music-releases.css';

function MusicReleasesSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const releases = [
    {
      title: 'Drink Up',
      artist: 'Amelissa',
      type: 'Single',
      image: '/images/covers/Cover drink up .png',
      youtubeUrl: 'https://www.youtube.com/watch?v=ycycsq8HviM&list=OLAK5uy_lZirJgO5BiCMyaLJ0M9Hl5sgtIjHkUc0c',
      badge: null
    },
    {
      title: 'Dedim Sana',
      artist: 'Amelissa',
      type: 'Single',
      image: '/images/covers/Cover dedim sana.png',
      youtubeUrl: 'https://www.youtube.com/watch?v=kahjpxAWJxE&list=OLAK5uy_kPMy_XJCKXU9GU-4F_RkY58-dPiNZr4vs',
      badge: null
    },
    {
      title: 'For the First Time',
      artist: 'Amelissa',
      type: 'Single',
      image: '/images/covers/Cover for the first time.png',
      youtubeUrl: 'https://www.youtube.com/watch?v=KMCn6aV_pvE&list=OLAK5uy_mbfz5sQ2OLSeHfp0XV50VFtqbNWDRgwMI',
      badge: null
    }
  ];

  return (
    <section className="music-releases-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className={`releases-header animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
          <span className="releases-badge" style={{ animationDelay: '0.1s' }}>Listen Now</span>
          <h2 className="releases-main-title" style={{ animationDelay: '0.2s' }}>Music Releases</h2>
          <p className="releases-subtitle" style={{ animationDelay: '0.3s' }}>Explore Amelissa's latest singles and collaborations</p>
        </div>

        {/* Releases Grid */}
        <div className="row g-4 justify-content-center">
          {releases.map((release, index) => (
            <div 
              className={`col-lg-4 col-md-6 animate-on-scroll card-animate ${isVisible ? 'animate-visible' : ''}`} 
              key={index}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <article className="music-release-card">
                {/* Album Art */}
                <div className="release-image-container">
                  <img 
                    src={release.image} 
                    alt={release.title}
                    className="release-album-art"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  {release.badge && (
                    <span className="release-badge">{release.badge}</span>
                  )}
                  <div className="release-overlay">
                    <a 
                      href={release.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-button-large"
                      aria-label={`Play ${release.title}`}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Release Info */}
                <div className="release-info">
                  <div className="release-type-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                    {release.type}
                  </div>
                  <h3 className="release-title">{release.title}</h3>
                  <p className="release-artist">{release.artist}</p>
                  
                  {/* Action Buttons */}
                  <div className="release-actions">
                    <a 
                      href={release.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-listen"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicReleasesSection;
