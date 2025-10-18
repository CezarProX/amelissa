import { Sparkles, Award, Users, Music2 } from 'lucide-react';

const MobileAbout = () => {
  const stats = [
    { icon: Music2, value: '10+', label: 'Songs' },
    { icon: Users, value: '50K+', label: 'Fans' },
    { icon: Award, value: '5+', label: 'Awards' },
  ];

  return (
    <section className="mobile-about">
      <div className="mobile-about__container">
        {/* Section Header */}
        <div className="mobile-about__header">
          <Sparkles className="mobile-about__header-icon" />
          <h2 className="mobile-about__title">About Amelissa</h2>
        </div>

        {/* Bio Card */}
        <div className="mobile-about__card">
          <div className="mobile-about__card-content">
            <p className="mobile-about__text">
              A rising vocal artist pushing boundaries with her unique sound. 
              Blending contemporary pop with R&B influences, Amelissa creates 
              music that resonates with authenticity and raw emotion.
            </p>
            <p className="mobile-about__text">
              From intimate acoustic sessions to powerful performances, 
              she captivates audiences with her dynamic range and compelling storytelling.
            </p>
          </div>

          {/* Stats */}
          <div className="mobile-about__stats">
            {stats.map((stat, index) => (
              <div key={index} className="mobile-about__stat">
                <stat.icon className="mobile-about__stat-icon" />
                <div className="mobile-about__stat-value">{stat.value}</div>
                <div className="mobile-about__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mobile-about__quote">
          <div className="mobile-about__quote-mark">"</div>
          <p className="mobile-about__quote-text">
            Music is my voice when words aren't enough
          </p>
          <div className="mobile-about__quote-author">— Amelissa</div>
        </div>
      </div>
    </section>
  );
};

export default MobileAbout;

