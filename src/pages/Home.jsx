import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PlayerSection from '../components/PlayerSection';
import MusicReleasesSection from '../components/MusicReleasesSection';

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section section-hero">
        <HeroSection />
        <AboutSection />
      </section>

      {/* Player */}
      <PlayerSection />

      {/* Music Releases */}
      <MusicReleasesSection />
    </>
  );
}

export default Home;

