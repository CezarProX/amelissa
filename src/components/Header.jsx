import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="section page-header">
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
  );
}

export default Header;
