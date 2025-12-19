import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-main">Osteria</span>
                <span className="logo-sub">dei Poeti</span>
              </div>
              <p className="footer-tagline">
                Ristorante e Pizzeria in Maschwanden.<br />
                Authentische italienische Küche seit Generationen.
              </p>
              <div className="footer-social">
                <a 
                  href="https://www.instagram.com/osteriadeipoeti" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://g.page/r/YOUR_GOOGLE_ID/review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Google"
                  className="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Speisekarte</a></li>
                <li><a href="#gallery">Galerie</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#reviews">Bewertungen</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </div>
            
            {/* Hours */}
            <div className="footer-hours">
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
                <li className="closed">
                  <span>Montag</span>
                  <span>Geschlossen</span>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="footer-contact">
              <h4>Kontakt</h4>
              <address>
                <p className="address-line">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Kreuzrai 1<br />8933 Maschwanden</span>
                </p>
                <p className="address-line">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <a href="tel:+41447670501">044 767 05 01</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              {currentYear} Osteria dei Poeti. Alle Rechte vorbehalten.
            </p>
            <div className="footer-legal">
              <a href="#impressum">Impressum</a>
              <span className="separator"></span>
              <a href="#datenschutz">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
