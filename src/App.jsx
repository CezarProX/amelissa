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
  const [preloaderFadedIn, setPreloaderFadedIn] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Enable scroll performance optimizations
  useScrollPerformance();

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

    // Step 1: Fade in the preloader (100ms delay for smooth start)
    const fadeInTimer = setTimeout(() => {
      setPreloaderFadedIn(true);
    }, 100);

    // Step 2: After showing preloader for 1200ms, start fading it out and content in
    const loadTimer = setTimeout(() => {
      setPreloaderVisible(false);
      setContentVisible(true);
    }, 1200);

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
      clearTimeout(fadeInTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <Router>
      {/* Mobile Landing Page - Only visible on mobile */}
      <MobileHome />
      
      {/* Preloader - Fades in first, then fades out */}
      <div 
        className={`preloader ${preloaderFadedIn ? 'preloader-fade-in' : ''} ${!preloaderVisible ? 'loaded' : ''}`}
        style={{
          opacity: preloaderFadedIn ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <div className="preloader-body">
          <div className="cssload-container">
            <div className="cssload-speeding-wheel"></div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Hidden on mobile */}
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

      {/* Snackbars */}
      <div className="snackbars" id="form-output-global"></div>

      {/* Fixed Player */}
      <FixedPlayer />
    </Router>
  );
}

export default App;
