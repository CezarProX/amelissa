import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/player.css';

function PlayerSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  const videoId = 'r96b5mtkHrE'; // YouTube video ID
  const songTitle = 'Not Fair';
  const artist = 'AMELISSA';

  const onReady = (event) => {
    try {
      setPlayer(event.target);
      setDuration(event.target.getDuration());
      setHasError(false);
    } catch (error) {
      console.warn('YouTube player ready error:', error);
      setHasError(true);
    }
  };

  const onStateChange = (event) => {
    try {
      setIsPlaying(event.data === 1);
    } catch (error) {
      console.warn('YouTube player state change error:', error);
    }
  };

  const onError = (event) => {
    console.warn('YouTube player error:', event);
    setHasError(true);
  };

  useEffect(() => {
    if (player && isPlaying && !hasError) {
      const interval = setInterval(() => {
        try {
          const current = player.getCurrentTime();
          const total = player.getDuration();
          if (typeof current === 'number' && typeof total === 'number') {
            setCurrentTime(current);
            setDuration(total);
            setProgress((current / total) * 100);
          }
        } catch (error) {
          console.warn('Error updating player progress:', error);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [player, isPlaying, hasError]);

  const handlePlayPause = () => {
    if (player && !hasError) {
      try {
        if (isPlaying) {
          player.pauseVideo();
        } else {
          player.playVideo();
        }
      } catch (error) {
        console.warn('Error controlling player:', error);
        setHasError(true);
      }
    } else if (hasError) {
      // Open YouTube in new tab as fallback
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  const handleSeek = (e) => {
    if (player && !hasError) {
      try {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const seekTime = percentage * duration;
        player.seekTo(seekTime);
      } catch (error) {
        console.warn('Error seeking player:', error);
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin,
      enablejsapi: 1,
    },
  };

  return (
    <section className="section section-lg bg-secondary-2" ref={ref}>
      <div className="container">
        <div className={`custom-player animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}>
          {/* Hidden YouTube Player */}
          {!hasError && (
            <div style={{ display: 'none' }}>
              <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                onStateChange={onStateChange}
                onError={onError}
              />
            </div>
          )}

          {/* Custom Player UI */}
          <div className="player-header">
            <span className="now-playing-text">NOW PLAYING</span>
          </div>

          <div className="player-content">
            <div className="song-info">
              <h3 className="song-title">{songTitle}</h3>
              <p className="song-artist">{artist}</p>
            </div>

            <div className="player-controls">
              <button className="control-btn" disabled>
                <SkipBack size={20} />
              </button>
              
              <button 
                className="play-pause-btn" 
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              
              <button className="control-btn" disabled>
                <SkipForward size={20} />
              </button>
            </div>

            <div className="progress-section">
              <span className="time-display">{formatTime(currentTime)}</span>
              <div 
                className="progress-bar-container" 
                onClick={handleSeek}
              >
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <span className="time-display">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayerSection;

