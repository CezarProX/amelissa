import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-center">
            {/* Centered Logo & Description */}
            <div className="col-lg-6 col-md-8 col-12">
              <div className="footer-brand text-center">
                <Link to="/" className="footer-logo-link">
                  <img 
                    src="/images/Amelissa Logo alb.png" 
                    alt="Amelissa" 
                    className="footer-logo"
                    style={{ maxWidth: '200px', marginBottom: '1.5rem' }}
                  />
                </Link>
                <p className="footer-description" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Descoperă frumusețea muzicii clasice și contemporane cu Amelissa. 
                  Experiențe muzicale unice pentru sufletul tău.
                </p>
                <div className="footer-social" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <a href="https://www.facebook.com/AMELISSA.OFFICIAL" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/amelissa.official/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://open.spotify.com/artist/amelissa" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-spotify"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="text-center">
            <p className="footer-copyright">
              &copy; {currentYear} Amelissa. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

