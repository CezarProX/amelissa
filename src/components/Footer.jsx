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
                <p className="footer-description" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Discover the art of emotion through Amelissa's music, shaped by truth and soul.
                </p>
                <Link to="/" className="footer-logo-link">
                  <img 
                    src="/images/Amelissa Logo alb.png" 
                    alt="Amelissa" 
                    className="footer-logo"
                    style={{ maxWidth: '200px', marginBottom: '1.5rem' }}
                  />
                </Link>
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

