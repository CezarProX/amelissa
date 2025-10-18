import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    // Handle scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 150; // Approximate height of the header
      
      if (scrollPosition > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial checks
    checkScreenSize();
    handleScroll();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const shouldShowFloating = isScrolled || isSmallScreen;

  return (
    <>
      {/* Original Header - Hidden when floating is active */}
      <header className={`section page-header ${shouldShowFloating ? 'header-hidden' : ''}`}>
        <div className="rd-navbar-wrap">
          <nav className="rd-navbar">
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                <div className="rd-navbar-panel">
                  <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap">
                    <span></span>
                  </button>
                  <div className="rd-navbar-brand">
                    <Link className="brand" to="/">
                      <img 
                        className="brand-logo-dark" 
                        src="/images/Amelissa-logo-negru.png" 
                        alt="Amelissa" 
                        width="743" 
                        height="138"
                      />
                      <img 
                        className="brand-logo-light" 
                        src="/images/logo-inverse-892x110.png" 
                        alt="Amelissa" 
                        width="446" 
                        height="55"
                      />
                    </Link>
                    <div className="brand-tagline">
                      SINGER • PERFORMER • STORYTELLER THROUGH MUSIC
                    </div>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <Link className="rd-nav-link" to="/">MEET</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Floating Navbar with Glass Morphism */}
      <nav className={`floating-navbar ${shouldShowFloating ? 'floating-navbar-visible' : ''}`}>
        <div className="floating-navbar-container">
          <div className="floating-brand-wrapper">
            <Link className="floating-brand" to="/">
              <img 
                src="/images/Amelissa-logo-negru.png" 
                alt="Amelissa" 
                className="floating-logo"
              />
            </Link>
            <div className="floating-tagline">
              SINGER • PERFORMER • STORYTELLER THROUGH MUSIC
            </div>
          </div>
          <ul className="floating-nav-menu">
            <li className="floating-nav-item active">
              <Link className="floating-nav-link" to="/">MEET</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

