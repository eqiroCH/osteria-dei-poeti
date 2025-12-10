import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">Ristorante & Pizzeria</div>
        
        <h1 className="hero-title">
          <span className="title-line">Osteria</span>
          <span className="title-accent">dei Poeti</span>
        </h1>
        
        <div className="hero-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        
        <p className="hero-tagline">
          Authentische italienische Küche mit mediterranem Flair
        </p>
        
        <div className="hero-rating">
          <div className="stars">★★★★★</div>
          <span className="rating-text">4.6 / 5 — 42 Bewertungen</span>
        </div>
        
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">
            Speisekarte
          </a>
          <a href="#contact" className="btn btn-secondary">
            Reservieren
          </a>
        </div>
        
        <div className="hero-features">
          <div className="feature">
            <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
            <span>Vor Ort geniessen</span>
          </div>
          <div className="feature">
            <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 8h14l-1.5 9a2 2 0 01-2 1.5H8.5a2 2 0 01-2-1.5L5 8z"/>
              <path d="M8 8V6a4 4 0 118 0v2"/>
            </svg>
            <span>Zum Mitnehmen</span>
          </div>
          <div className="feature">
            <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="10" width="20" height="8" rx="2"/>
              <path d="M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3"/>
              <circle cx="6" cy="18" r="2"/>
              <circle cx="18" cy="18" r="2"/>
            </svg>
            <span>Lieferservice</span>
          </div>
        </div>
      </div>
      
      <a href="#about" className="scroll-indicator">
        <span>Entdecken</span>
        <div className="scroll-arrow"></div>
      </a>
    </section>
  )
}

export default Hero

