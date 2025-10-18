import { Music, Heart } from 'lucide-react';

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Use', url: '#' },
    { label: 'Press Kit', url: '#' },
  ];

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__container">
        {/* Brand */}
        <div className="mobile-footer__brand">
          <Music className="mobile-footer__brand-icon" />
          <span className="mobile-footer__brand-name">AMELISSA</span>
        </div>

        {/* Links */}
        <nav className="mobile-footer__nav">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="mobile-footer__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="mobile-footer__copyright">
          <p className="mobile-footer__copyright-text">
            © {currentYear} Amelissa. All rights reserved.
          </p>
          <p className="mobile-footer__made-with">
            Made with <Heart size={14} className="mobile-footer__heart" /> for the fans
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;

