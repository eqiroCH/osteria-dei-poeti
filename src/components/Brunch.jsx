import { useState, useEffect } from 'react'
import './Brunch.css'

const facts = [
  {
    title: 'Öffnungszeiten',
    text: 'Bauernfrühstück 08:30 – 10:30 Uhr · Bauernbrunch 11:30 – 13:30 Uhr',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    ),
  },
  {
    title: 'Reichhaltiges Buffet',
    text: 'Beim Frühstück & Brunch erwartet Sie dasselbe reichhaltige Buffet mit frischen, regionalen Spezialitäten. 60 Plätze im Innenbereich, 30 auf der Terrasse.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 11h18" />
        <path d="M12 11V4" />
        <path d="M6 4v3a3 3 0 0 0 6 0" />
        <path d="M18 4v3a3 3 0 0 1-6 0" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    title: 'Preise',
    text: 'Erwachsene ab 16 J. CHF 46.50 · Kinder 0–3 J. gratis · 4–10 J. CHF 1.50 pro Altersjahr · 11–15 J. CHF 29.50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L3 13V3h10l7.59 7.59a2 2 0 0 1 0 2.82Z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: 'Kinderbetreuung',
    text: 'Für Kinder von 3 bis 10 Jahren bieten wir während des Bauernbrunchs eine liebevolle Betreuung für bis zu 2 Stunden an.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

function Brunch() {
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    document.body.style.overflow = zoom ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setZoom(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  return (
    <section id="brunch" className="brunch">
      <div className="brunch-bg-pattern"></div>

      <div className="container">
        {/* Title above */}
        <div className="brunch-header">
          <span className="section-label">Jeden Sonntag</span>
          <h2 className="section-title">
            Bauernfrühstück & <span className="gold-accent">Bauernbrunch</span>
          </h2>
          <p className="section-subtitle">Regionale Genüsse in gemütlicher Atmosphäre</p>
        </div>

        <div className="brunch-content">
          {/* Poster – click to enlarge */}
          <figure className="brunch-image" onClick={() => setZoom(true)}>
            <img
              src="/bauernbrunch.jpeg"
              alt="Bauernfrühstück & Bauernbrunch – Osteria dei Poeti"
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
            />
            <span className="brunch-zoom-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              Vergrößern
            </span>
          </figure>

          {/* Title + text on the right */}
          <div className="brunch-text">
            <h3 className="brunch-subtitle">Genießen Sie unseren Sonntagsbrunch</h3>
            <p className="brunch-lead">
              Wir freuen uns, Sie ab <strong>Sonntag, 2. August 2026</strong> jeden Sonntag zu unserem
              Bauernfrühstück &amp; Bauernbrunch in der Osteria dei Poeti begrüßen zu dürfen –
              mit einem reichhaltigen Buffet voller frischer, regionaler Spezialitäten.
            </p>

            <ul className="brunch-facts">
              {facts.map((f) => (
                <li key={f.title} className="brunch-fact">
                  <span className="brunch-fact-icon">{f.icon}</span>
                  <span className="brunch-fact-body">
                    <span className="brunch-fact-title">{f.title}</span>
                    <span className="brunch-fact-text">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="brunch-reservation">
              Reservation erforderlich – Teilnahme nur mit Reservation.
            </p>

            <div className="brunch-actions">
              <a
                href="https://wa.me/41799380310"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Jetzt reservieren
              </a>
              <a href="tel:+41447670501" className="btn btn-outline-gold">
                044 767 05 01
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom / Lightbox */}
      {zoom && (
        <div className="brunch-lightbox" onClick={() => setZoom(false)}>
          <button className="brunch-lightbox-close" onClick={() => setZoom(false)} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            className="brunch-lightbox-img"
            src="/bauernbrunch.jpeg"
            alt="Bauernfrühstück & Bauernbrunch – Osteria dei Poeti"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Brunch
