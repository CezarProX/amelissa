function MobileFooter() {
  return (
    <footer className="mobile-footer">
      <div className="mobile-section-container">
        {/* Logo */}
        <div className="mobile-footer-brand">
          <img 
            src="/images/Amelissa Logo alb.png" 
            alt="Amelissa" 
            className="mobile-footer-logo"
          />
        </div>
        
        {/* Description */}
        <div className="mobile-footer-description">
          <p>
            Descoperă frumusețea muzicii clasice și contemporane cu Amelissa. 
            Experiențe muzicale unice pentru sufletul tău.
          </p>
        </div>
        
        {/* Social Media */}
        <div className="mobile-footer-social">
          <a 
            href="https://www.facebook.com/AMELISSA.OFFICIAL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a 
            href="https://www.instagram.com/amelissa.official/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a 
            href="https://open.spotify.com/artist/amelissa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-spotify"></i>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="mobile-footer-bottom">
          <p className="mobile-footer-copyright">
            © {new Date().getFullYear()} Amelissa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;

