import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      
      <div className="container">
        <div className="contact-content-centered">
          <span className="section-label">Besuchen Sie uns</span>
          <h2 className="contact-title">
            Reservieren Sie Ihren <span className="gold-accent">Tisch</span>
          </h2>
          
          <p className="contact-intro">
            Wir freuen uns auf Ihren Besuch! Rufen Sie uns an für Ihre Reservierung.
          </p>
          
          <div className="phone-cta">
            <a href="tel:+41447670501" className="phone-button">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span className="phone-number">044 767 05 01</span>
            </a>
          </div>
          
          <div className="info-cards-grid">
            <div className="info-card">
              <svg className="info-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className="info-content">
                <h4>Adresse</h4>
                <p>Kreuzrai 1<br />8933 Maschwanden</p>
              </div>
            </div>
            
            <div className="info-card">
              <svg className="info-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <div className="info-content">
                <h4>Öffnungszeiten</h4>
                <p>
                  Di - Fr: 10:00 - 14:00, 17:00 - 22:00<br />
                  Sa: 10:00 - 22:00<br />
                  So: 10:00 - 21:00<br />
                  Mo: Geschlossen
                </p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.5!2d8.4344!3d47.2367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aab8c8b8b8b8b%3A0x2a0b0b0b0b0b0b0b!2sKreuzrai%201%2C%208933%20Maschwanden!5e0!3m2!1sde!2sch!4v1"
              width="100%"
              height="300"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Standort"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

