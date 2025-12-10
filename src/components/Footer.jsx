import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">Osteria</span>
                <span className="logo-accent">dei Poeti</span>
              </div>
              <p className="footer-tagline">
                Ristorante & Pizzeria in Maschwanden. 
                Authentische italienische Küche.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span>f</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
                  <span>🦉</span>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Über Uns</a></li>
                <li><a href="#menu">Speisekarte</a></li>
                <li><a href="#gallery">Galerie</a></li>
                <li><a href="#reviews">Bewertungen</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Öffnungszeiten</h4>
              <ul className="hours-list">
                <li>
                  <span>Dienstag - Freitag</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li>
                  <span></span>
                  <span>17:00 - 22:00</span>
                </li>
                <li>
                  <span>Samstag</span>
                  <span>10:00 - 22:00</span>
                </li>
                <li>
                  <span>Sonntag</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Montag</span>
                  <span>Geschlossen</span>
                </li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Kontakt</h4>
              <address>
                <p>Kreuzrai 1</p>
                <p>8933 Maschwanden</p>
                <p><a href="tel:+41447670501">044 767 05 01</a></p>
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Osteria dei Poeti. Alle Rechte vorbehalten.</p>
            <div className="footer-legal">
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
              <a href="#">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

