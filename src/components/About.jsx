import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="image-main">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" 
                alt="Italienisches Gericht"
              />
            </div>
            <div className="image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80" 
                alt="Restaurant Ambiente"
              />
            </div>
            <div className="image-accent">
              <div className="experience-badge">
                <span className="years">4.6</span>
                <span className="text">Google Bewertung</span>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-label">Willkommen</span>
            <h2 className="about-title">
              Eine kulinarische Reise nach <span className="gold-accent">Italien</span>
            </h2>
            
            <div className="about-divider">
              <span></span>
              <span className="divider-diamond">◆</span>
              <span></span>
            </div>
            
            <p className="about-text">
              Willkommen in der Osteria dei Poeti in Maschwanden! 
              Unser Name – "Taverne der Dichter" – spiegelt unsere Philosophie wider: 
              Jedes Gericht erzählt eine Geschichte, jeder Bissen ist Poesie.
            </p>
            
            <p className="about-text">
              Unsere Küche verbindet traditionelle italienische Rezepte mit modernen 
              Einflüssen. Wir verwenden ausschließlich frische, hochwertige Zutaten 
              und bereiten alles mit Liebe und Leidenschaft zu.
            </p>
            
            <blockquote className="about-quote">
              "Italienische Küche mal anders! Tolle Speisekarte - auch vegetarisch."
              <cite>— Google Rezension</cite>
            </blockquote>
            
            <div className="about-features">
              <div className="about-feature">
                <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L12 6M12 22L12 18M6 12H2M22 12H18"/>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 8a4 4 0 014 4M8 12a4 4 0 014-4"/>
                </svg>
                <div className="feature-text">
                  <h4>Frische Zutaten</h4>
                  <p>Täglich frisch vom Markt</p>
                </div>
              </div>
              <div className="about-feature">
                <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4a4 4 0 014 4v2H8V8a4 4 0 014-4z"/>
                  <path d="M4 14h16v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z"/>
                  <path d="M8 10v4M16 10v4M12 10v4"/>
                </svg>
                <div className="feature-text">
                  <h4>Erfahrene Köche</h4>
                  <p>Authentische Rezepte</p>
                </div>
              </div>
              <div className="about-feature">
                <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 22h8M12 18v4"/>
                  <path d="M12 2v3M12 5c-2 0-4 2-4 6 0 3 2 5 4 7 2-2 4-4 4-7 0-4-2-6-4-6z"/>
                </svg>
                <div className="feature-text">
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

