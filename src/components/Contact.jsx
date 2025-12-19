import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-label">Besuchen Sie uns</span>
          <h2 className="section-title">
            Reservieren Sie Ihren <span className="gold-accent">Tisch</span>
          </h2>
        </div>
        
        {/* Phone CTA */}
        <div className="phone-section">
          <a href="tel:+41447670501" className="phone-button">
            <div className="phone-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="phone-text">
              <span className="phone-label">Jetzt anrufen</span>
              <span className="phone-number">044 767 05 01</span>
            </div>
          </a>
        </div>
        
        {/* Info Cards */}
        <div className="info-grid">
          <div className="info-card">
            <div className="card-header">
              <h4>Adresse</h4>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <p>Kreuzrai 1</p>
              <p>8933 Maschwanden</p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Kreuzrai+1+8933+Maschwanden" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-link"
            >
              Route anzeigen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <div className="info-card">
            <div className="card-header">
              <h4>Öffnungszeiten</h4>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <div className="hours-list">
                <div className="hours-row">
                  <span className="hours-day">Di - Fr</span>
                  <span className="hours-time">10:00 - 14:00 / 17:00 - 22:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sa</span>
                  <span className="hours-time">10:00 - 22:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">So</span>
                  <span className="hours-time">10:00 - 21:00</span>
                </div>
                <div className="hours-row closed">
                  <span className="hours-day">Mo</span>
                  <span className="hours-time">Geschlossen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
