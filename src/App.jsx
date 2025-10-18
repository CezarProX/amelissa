import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedPlayer from './components/FixedPlayer';
import Home from './pages/Home';
import MobileHome from './pages/MobileHome';
import './App.css';

function App() {
  useEffect(() => {
    // Load jQuery and plugins
    const loadScripts = async () => {
      // Create script elements for jQuery plugins
      const coreScript = document.createElement('script');
      coreScript.src = '/js/core.min.js';
      coreScript.async = false;
      document.body.appendChild(coreScript);

      coreScript.onload = () => {
        const script = document.createElement('script');
        script.src = '/js/script.js';
        script.async = false;
        document.body.appendChild(script);
      };
    };

    loadScripts();

    // Cleanup
    return () => {
      // Optional: cleanup scripts if needed
    };
  }, []);

  return (
    <Router>
      {/* Mobile Landing Page - Only visible on mobile */}
      <MobileHome />
      
      {/* Desktop Version - Hidden on mobile */}
      <div className="page">
        {/* IE Panel */}
        <div className="ie-panel">
          <a href="https://windows.microsoft.com/en-US/internet-explorer/">
            <img 
              src="/images/ie8-panel/warning_bar_0000_us.jpg" 
              height="42" 
              width="820" 
              alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
            />
          </a>
        </div>

        {/* Preloader */}
        <div className="preloader">
          <div className="preloader-body">
            <div className="cssload-container">
              <div className="cssload-speeding-wheel"></div>
            </div>
          </div>
        </div>

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
