import './Footer.css'

function Footer({ currentPage, setCurrentPage }) {
  const currentYear = new Date().getFullYear()

  const handleLegalClick = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

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
                Authentische italienische Küche.
              </p>
              <div className="footer-social">
                <a 
                  href="https://www.instagram.com/osteriadeipoeti2025" 
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
                  href="https://www.tiktok.com/@osteriadeipoeti" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok"
                  className="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul className="footer-nav-inline">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Speisekarte</a></li>
                <li><a href="#gallery">Galerie</a></li>
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
                  <span>17:00 - 22:00</span>
                </li>
                <li>
                  <span>Sonntag</span>
                  <span>12:00 - 21:00</span>
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
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kreuzrai+1+8933+Maschwanden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="address-line address-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Kreuzrai 1,<br />8933 Maschwanden</span>
                </a>
                <p className="address-line">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <a href="tel:+41447670501">044 767 05 01</a>
                </p>
                <p className="address-line">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:Osteriadeipoeti391@gmail.com">Osteriadeipoeti391@gmail.com</a>
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
              <a href="#" onClick={(e) => handleLegalClick(e, 'impressum')}>Impressum</a>
              <span className="separator"></span>
              <a href="#" onClick={(e) => handleLegalClick(e, 'datenschutz')}>Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
