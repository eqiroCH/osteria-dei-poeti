import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-decoration hero-decoration-left"></div>
      <div className="hero-decoration hero-decoration-right"></div>
      
      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span>Ristorante e Pizzeria</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-main">Osteria</span>
          <span className="title-accent">dei Poeti</span>
        </h1>
        
        <div className="hero-divider">
          <span className="divider-line"></span>
          <span className="divider-diamond"></span>
          <span className="divider-line"></span>
        </div>
        
        <p className="hero-tagline">
          Authentische italienische Küche mit mediterranem Flair
        </p>
        
        <div className="hero-quote">
          <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p>"Italienische Küche mal anders! Tolle Speisekarte - auch vegetarisch♥️ - in einem wunderschönen , historischen Landgasthof mit Garten und sehr schön renovierter Gaststube..."</p>
          <a href="#reviews" className="quote-link">
            <cite>Google Rezension</cite>
          </a>
        </div>
        
        <div className="hero-actions">
          <a href="#menu" className="btn btn-secondary">
            <span>Speisekarte</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <div className="btn-combined">
            <a href="tel:+41447670501" className="btn-combined-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>Reservieren</span>
            </a>
            <div className="btn-divider"></div>
            <a href="#contact" className="btn-combined-right">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-services">
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11v9a2 2 0 002 2h14a2 2 0 002-2v-9"/>
                <path d="M12 3v8M8 7l4 4 4-4"/>
                <path d="M1 11h22"/>
              </svg>
            </div>
            <span>Vor Ort geniessen</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <span>Zum Mitnehmen</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="5.5" cy="17.5" r="2.5"/>
                <circle cx="18.5" cy="17.5" r="2.5"/>
                <path d="M8 17.5h8"/>
                <path d="M15 6H9a2 2 0 00-2 2v9.5"/>
                <path d="M15 6l4 5v6.5"/>
              </svg>
            </div>
            <span>Lieferservice</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#menu" className="scroll-indicator">
        <span className="scroll-text">Entdecken</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </a>
    </section>
  )
}

export default Hero
