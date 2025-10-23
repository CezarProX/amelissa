import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedPlayer from './components/FixedPlayer';
import Home from './pages/Home';
import MobileHome from './pages/MobileHome';
import { useScrollPerformance } from './hooks/useScrollPerformance';
import './App.css';

function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Enable scroll performance optimizations
  useScrollPerformance();

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Suppress YouTube widget API errors
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.toString().includes('postMessage') || 
          args[0]?.toString().includes('www-widgetapi')) {
        return; // Suppress YouTube cross-origin errors
      }
      originalError.apply(console, args);
    };

    // Remove preloader based on actual load state (no artificial delay)
    const handleLoad = () => {
      // Small delay for smooth transition only
      setTimeout(() => {
        setPreloaderVisible(false);
        setContentVisible(true);
      }, 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Optimize page rendering - load scripts after React is fully initialized
    const loadScripts = () => {
      // Create script elements for jQuery plugins
      const coreScript = document.createElement('script');
      coreScript.src = '/js/core.min.js';
      coreScript.async = true;
      coreScript.defer = true;
      coreScript.onerror = () => {
        console.warn('Failed to load core.min.js');
      };
      document.body.appendChild(coreScript);

      coreScript.onload = () => {
        const script = document.createElement('script');
        script.src = '/js/script.js';
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          console.warn('Failed to load script.js');
        };
        document.body.appendChild(script);
      };
    };

    // Wait for DOM to be fully ready before loading scripts
    if (document.readyState === 'complete') {
      setTimeout(loadScripts, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadScripts, 500);
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      {/* Preloader - Shows while loading */}
      <div 
        className={`preloader ${!preloaderVisible ? 'loaded' : ''}`}
        style={{
          opacity: preloaderVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        <div className="preloader-body">
          <div className="cssload-container">
            <div className="cssload-speeding-wheel"></div>
          </div>
        </div>
      </div>

      {/* Conditional Rendering: Only render mobile OR desktop, not both */}
      {isMobile ? (
        /* Mobile Landing Page */
        <MobileHome />
      ) : (
        /* Desktop Version */
        <div className={`page ${contentVisible ? 'fadeIn animated' : ''}`} style={{ opacity: contentVisible ? 1 : 0 }}>
          {/* Header */}
          <Header />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future routes can be added here */}
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      )}

      {/* Snackbars */}
      <div className="snackbars" id="form-output-global"></div>

      {/* Fixed Player */}
      <FixedPlayer />
    </Router>
  );
}

export default App;
