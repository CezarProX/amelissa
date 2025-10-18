import MobileHeader from '../components/mobile/MobileHeader';
import MobileHero from '../components/mobile/MobileHero';
import MobileAbout from '../components/mobile/MobileAbout';
import PlayerSection from '../components/PlayerSection';
import MobileMusic from '../components/mobile/MobileMusic';
import MobileFooter from '../components/mobile/MobileFooter';
import MobileBackToTop from '../components/mobile/MobileBackToTop';

function MobileHome() {
  return (
    <div className="mobile-landing">
      <MobileHeader />
      <MobileHero />
      <MobileAbout />
      <PlayerSection />
      <MobileMusic />
      <MobileFooter />
      <MobileBackToTop />
    </div>
  );
}

export default MobileHome;
