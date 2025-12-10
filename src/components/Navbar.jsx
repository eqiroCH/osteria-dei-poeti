import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Über Uns' },
    { href: '#menu', label: 'Speisekarte' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#reviews', label: 'Bewertungen' },
    { href: '#contact', label: 'Kontakt' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">Osteria</span>
          <span className="logo-accent">dei Poeti</span>
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+41447670501" className="nav-cta">
          Reservieren
        </a>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

