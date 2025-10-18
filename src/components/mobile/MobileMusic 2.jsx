import { Play, Pause, Heart, Share2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const MobileMusic = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState(new Set());

  const tracks = [
    {
      id: 1,
      title: 'Latest Single',
      subtitle: 'Brand New Release',
      cover: '/images/Cover 2nd Song 1080x1080.png',
      duration: '3:24',
      releaseDate: '2024',
    },
    {
      id: 2,
      title: 'Previous Hit',
      subtitle: 'Fan Favorite',
      cover: '/images/Cover Piesa 1.jpg',
      duration: '3:45',
      releaseDate: '2023',
    },
  ];

  const toggleLike = (trackId) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(trackId)) {
        newSet.delete(trackId);
      } else {
        newSet.add(trackId);
      }
      return newSet;
    });
  };

  const playTrack = (index) => {
    if (currentTrack === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
    }
  };

  return (
    <section className="mobile-music">
      <div className="mobile-music__container">
        {/* Section Header */}
        <div className="mobile-music__header">
          <h2 className="mobile-music__title">Latest Music</h2>
          <p className="mobile-music__subtitle">Stream now on all platforms</p>
        </div>

        {/* Featured Track */}
        <div className="mobile-music__featured">
          <div className="mobile-music__featured-cover">
            <img 
              src={tracks[currentTrack].cover} 
              alt={tracks[currentTrack].title}
              className="mobile-music__featured-image"
            />
            <div className="mobile-music__featured-overlay">
              <button 
                className="mobile-music__play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="mobile-music__play-icon" />
                ) : (
                  <Play className="mobile-music__play-icon" />
                )}
              </button>
            </div>
          </div>

          <div className="mobile-music__featured-info">
            <h3 className="mobile-music__featured-title">
              {tracks[currentTrack].title}
            </h3>
            <p className="mobile-music__featured-subtitle">
              {tracks[currentTrack].subtitle}
            </p>
            
            <div className="mobile-music__featured-actions">
              <button 
                className={`mobile-music__action-btn ${likedTracks.has(tracks[currentTrack].id) ? 'active' : ''}`}
                onClick={() => toggleLike(tracks[currentTrack].id)}
              >
                <Heart className="mobile-music__action-icon" />
              </button>
              <button className="mobile-music__action-btn">
                <Share2 className="mobile-music__action-icon" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mobile-music__progress">
            <div className="mobile-music__progress-bar">
              <div className="mobile-music__progress-fill" style={{ width: '45%' }}></div>
            </div>
            <div className="mobile-music__progress-time">
              <span>1:32</span>
              <span>{tracks[currentTrack].duration}</span>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="mobile-music__list">
          {tracks.map((track, index) => (
            <div 
              key={track.id} 
              className={`mobile-music__track ${currentTrack === index ? 'active' : ''}`}
              onClick={() => playTrack(index)}
            >
              <div className="mobile-music__track-cover">
                <img 
                  src={track.cover} 
                  alt={track.title}
                  className="mobile-music__track-image"
                />
                <div className="mobile-music__track-play">
                  {currentTrack === index && isPlaying ? (
                    <Pause size={16} />
                  ) : (
                    <Play size={16} />
                  )}
                </div>
              </div>

              <div className="mobile-music__track-info">
                <h4 className="mobile-music__track-title">{track.title}</h4>
                <p className="mobile-music__track-subtitle">{track.subtitle}</p>
              </div>

              <div className="mobile-music__track-meta">
                <span className="mobile-music__track-duration">{track.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="mobile-music__platforms">
          <p className="mobile-music__platforms-title">Listen on your favorite platform</p>
          <div className="mobile-music__platforms-grid">
            <a href="#" className="mobile-music__platform-btn">
              <span>Spotify</span>
              <ExternalLink size={16} />
            </a>
            <a href="#" className="mobile-music__platform-btn">
              <span>Apple Music</span>
              <ExternalLink size={16} />
            </a>
            <a href="#" className="mobile-music__platform-btn">
              <span>YouTube</span>
              <ExternalLink size={16} />
            </a>
            <a href="#" className="mobile-music__platform-btn">
              <span>SoundCloud</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMusic;

