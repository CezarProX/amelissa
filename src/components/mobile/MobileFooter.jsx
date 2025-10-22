function MobileFooter() {
  return (
    <footer className="mobile-footer">
      <div className="mobile-section-container">
        {/* Description */}
        <div className="mobile-footer-description">
          <p>
            Discover the art of emotion through Amelissa's music, shaped by truth and soul.
          </p>
        </div>
        
        {/* Logo */}
        <div className="mobile-footer-brand">
          <img 
            src="/images/Amelissa Logo alb.png" 
            alt="Amelissa" 
            className="mobile-footer-logo"
          />
        </div>
        
        {/* Social Media */}
        <div className="mobile-footer-social">
          <a 
            href="https://www.facebook.com/share/1B2joM99dW/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/amelissa.official?igsh=MXRiMjZxdXh2aG45MQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com/@amelissaofficial?_t=ZN-90kvRGqzBYM&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
            aria-label="TikTok"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a 
            href="https://youtube.com/@amelissaofficial?si=1tgzOM9QQNCByyBQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-link"
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
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

