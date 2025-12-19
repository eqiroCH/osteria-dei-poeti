import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-bg-accent"></div>
      
      <div className="container">
        <div className="about-grid">
          {/* Images */}
          <div className="about-images">
            <div className="image-stack">
              <div className="image-main">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" 
                  alt="Italienisches Gericht"
                  loading="lazy"
                />
              </div>
              <div className="image-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80" 
                  alt="Restaurant Ambiente"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="about-content">
            <span className="section-label">Willkommen</span>
            <h2 className="about-title">
              Eine kulinarische Reise<br />
              <span className="gold-accent">nach Italien</span>
            </h2>
            
            <div className="about-divider">
              <span className="line"></span>
              <span className="diamond"></span>
              <span className="line"></span>
            </div>
            
            <div className="about-text">
              <p>
                Willkommen in der Osteria dei Poeti in Maschwanden!
              </p>
              <p>
                Unsere Küche verbindet traditionelle italienische Rezepte mit modernen 
                Einflüssen. Wir verwenden ausschließlich frische, hochwertige Zutaten 
                und bereiten alles mit Liebe und Leidenschaft zu.
              </p>
            </div>
            
            <blockquote className="about-quote">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p>Italienische Küche mal anders! Tolle Speisekarte - auch vegetarisch.</p>
              <cite>- Google Rezension</cite>
            </blockquote>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Frische Zutaten</h4>
                  <p>Täglich frisch vom Markt</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4a4 4 0 014 4v2H8V8a4 4 0 014-4z"/>
                    <path d="M4 14h16v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z"/>
                    <path d="M8 10v4M16 10v4M12 10v4"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Authentische Rezepte</h4>
                  <p>Traditionell italienisch</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 22h8M12 18v4"/>
                    <path d="M12 2v3M12 5c-2 0-4 2-4 6 0 3 2 5 4 7 2-2 4-4 4-7 0-4-2-6-4-6z"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Edle Weine</h4>
                  <p>Ausgewählte Tropfen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
