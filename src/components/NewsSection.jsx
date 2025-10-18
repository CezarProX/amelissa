function NewsSection() {
  const newsItems = [
    {
      month: 'Oct',
      day: '15',
      title: 'New Music Video Released',
      text: 'New music video for Amelissa\'s latest single "Echoes of Tomorrow" is now live. Experience the captivating visuals and soulful performance that brings this powerful ballad to life.',
      link: '#',
      linkText: 'Watch Now',
      icon: 'fa-play-circle',
      category: 'Video'
    },
    {
      month: 'Oct',
      day: '08',
      title: 'Featured in Vocal Magazine',
      text: 'Amelissa has been featured in Vocal Magazine\'s spotlight series, discussing her creative journey and the inspiration behind her unique sound. Read the full interview online.',
      link: '#',
      linkText: 'Read More',
      icon: 'fa-newspaper',
      category: 'Press'
    },
    {
      month: 'Sep',
      day: '28',
      title: 'Exciting Collaboration',
      text: 'Exciting collaboration announcement! Amelissa joins forces with renowned producer Alex Chen for an upcoming EP exploring contemporary vocal soundscapes. Stay tuned for more details.',
      link: '#',
      linkText: 'Learn More',
      icon: 'fa-music',
      category: 'News'
    },
    {
      month: 'Sep',
      day: '15',
      title: 'Behind The Scenes',
      text: 'Behind the scenes content from Amelissa\'s recent studio sessions is now available. Get an exclusive look at the creative process and hear snippets of upcoming releases.',
      link: '#',
      linkText: 'Explore',
      icon: 'fa-camera',
      category: 'Studio'
    }
  ];

  return (
    <section className="modern-news-section">
      <div className="container">
        {/* Section Header */}
        <div className="news-header">
          <span className="news-badge">Latest Updates</span>
          <h2 className="news-main-title">What's New</h2>
          <p className="news-subtitle">Stay updated with the latest news, releases, and behind-the-scenes content</p>
        </div>

        {/* News Grid */}
        <div className="row g-4">
          {newsItems.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <article className="modern-news-card">
                {/* Card Header with Date */}
                <div className="news-card-header">
                  <div className="news-date-badge">
                    <span className="news-month">{item.month}</span>
                    <span className="news-day">{item.day}</span>
                  </div>
                  <span className="news-category">
                    {item.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="news-card-body">
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-text">{item.text}</p>
                </div>

                {/* Card Footer */}
                <div className="news-card-footer">
                  <a href={item.link} className="news-card-link">
                    {item.linkText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 8h14M8 1l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="news-footer">
          <a href="#all-news" className="btn-view-all">
            View All News
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 12l4-4-4-4"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;

