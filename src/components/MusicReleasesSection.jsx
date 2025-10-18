import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function MusicReleasesSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const releases = [
    {
      title: 'Drink Up',
      artist: 'Amelissa',
      type: 'Single',
      image: '/images/Cover Piesa 1.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ycycsq8HviM&list=OLAK5uy_lZirJgO5BiCMyaLJ0M9Hl5sgtIjHkUc0c',
      badge: null
    },
    {
      title: 'Dedim Sana',
      artist: 'Amelissa',
      type: 'Single',
      image: '/images/Cover 2nd Song 1080x1080.png',
      youtubeUrl: 'https://www.youtube.com/watch?v=kahjpxAWJxE&list=OLAK5uy_kPMy_XJCKXU9GU-4F_RkY58-dPiNZr4vs',
      badge: null
    },
    {
      title: 'Echoes',
      artist: 'Amelissa',
      type: 'Single',
      image: '/images/Cover Piesa 1.jpg',
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
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                {/* Release Info */}
                <div className="release-info">
                  <div className="release-type-tag">
                    <i className="fas fa-music"></i>
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
                      <i className="fab fa-youtube"></i>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className={`streaming-platforms animate-on-scroll ${isVisible ? 'animate-visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <p className="streaming-text">Also available on</p>
          <div className="platform-icons">
            <a href="#spotify" className="platform-link" aria-label="Spotify">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="#apple-music" className="platform-link" aria-label="Apple Music">
              <i className="fab fa-apple"></i>
            </a>
            <a href="#soundcloud" className="platform-link" aria-label="SoundCloud">
              <i className="fab fa-soundcloud"></i>
            </a>
            <a href="#deezer" className="platform-link" aria-label="Deezer">
              <i className="fab fa-deezer"></i>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .music-releases-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: sectionEnter 1s ease-out forwards;
        }

        @keyframes sectionEnter {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .music-releases-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a961, transparent);
        }

        /* Header Styles */
        .releases-header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease-out;
        }

        .releases-badge {
          display: inline-block;
          padding: 10px 24px;
          background: linear-gradient(135deg, #c9a961, #b89552);
          color: white;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(201, 169, 97, 0.3);
        }

        .releases-main-title {
          font-size: 52px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 15px 0;
          line-height: 1.2;
        }

        .releases-subtitle {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Card Styles */
        .music-release-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .music-release-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        /* Image Container */
        .release-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
        }

        .release-album-art {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .music-release-card:hover .release-album-art {
          transform: scale(1.1);
        }

        .release-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(135deg, #c9a961, #b89552);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .release-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .music-release-card:hover .release-overlay {
          opacity: 1;
        }

        .play-button-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF0000;
          font-size: 36px;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .play-button-large:hover {
          transform: scale(1.15);
          background: white;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        /* Release Info */
        .release-info {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .release-type-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: #f8f9fa;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          align-self: flex-start;
        }

        .release-type-tag i {
          color: #c9a961;
          font-size: 11px;
        }

        .release-title {
          font-size: 26px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .release-artist {
          font-size: 16px;
          color: #666;
          margin: 0 0 24px 0;
          font-weight: 500;
        }

        .release-actions {
          margin-top: auto;
        }

        .btn-listen {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #c9a961, #b89552);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(201, 169, 97, 0.3);
          width: 100%;
          justify-content: center;
        }

        .btn-listen:hover {
          background: linear-gradient(135deg, #b89552, #a88442);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201, 169, 97, 0.4);
          color: white;
        }

        .btn-listen i {
          font-size: 18px;
        }

        /* Streaming Platforms */
        .streaming-platforms {
          text-align: center;
          margin-top: 80px;
          padding-top: 60px;
          border-top: 1px solid #e9ecef;
        }

        .streaming-text {
          font-size: 14px;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .platform-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .platform-link {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 24px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-decoration: none;
        }

        .platform-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          color: #c9a961;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 991px) {
          .music-releases-section {
            padding: 80px 0;
          }

          .releases-main-title {
            font-size: 42px;
          }

          .releases-subtitle {
            font-size: 16px;
          }
        }

        @media (max-width: 767px) {
          .music-releases-section {
            padding: 60px 0;
          }

          .releases-header {
            margin-bottom: 40px;
          }

          .releases-main-title {
            font-size: 36px;
          }

          .releases-subtitle {
            font-size: 15px;
            padding: 0 20px;
          }

          .release-title {
            font-size: 22px;
          }

          .release-artist {
            font-size: 14px;
          }

          .streaming-platforms {
            margin-top: 60px;
            padding-top: 40px;
          }

          .platform-link {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default MusicReleasesSection;

