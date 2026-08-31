import { useState, useEffect } from 'react'
import './Domenica.css'

const facts = [
  {
    title: 'Zeit',
    text: 'Jeden ersten Sonntag im Monat · 10:30 – 13:30 Uhr',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    ),
  },
  {
    title: 'Kein Buffet',
    text: 'Alles frisch aus unserer Küche, liebevoll angerichtet und direkt an den Tisch serviert.',
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
    title: 'Aus unserem Brunch',
    text: 'Antipasto del Poeti mit Salame, Prosciutto und Käse-Auswahl, frisches Brot & Focaccia, Cornetto mit Konfitüre & Butter, Tiramisù oder Cannolo siciliano – und vieles mehr.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Warme Speisen',
    text: 'Spiegelei und kleine Salsiccia – frisch zubereitet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22a7 7 0 0 0 7-7c0-5-4-6-4-10 0 0-3 2-3 5 0 2 1 3 1 4a1.5 1.5 0 0 1-3 0c0-1-.5-2-.5-2S5 14 5 15a7 7 0 0 0 7 7Z" />
      </svg>
    ),
  },
]

const prices = [
  {
    name: 'Piccolo',
    note: 'pro Person',
    value: 'CHF 24.50',
    incl: ['1 Glas Prosecco', '1 Orangensaft', '1 Kaffee nach Wahl'],
  },
  {
    name: 'Grande',
    note: 'pro Person',
    value: 'CHF 34.50',
    incl: ['1 Glas Prosecco', '1 Orangensaft', '1 Kaffee nach Wahl'],
  },
  {
    name: 'Kinder',
    note: '4 – 12 Jahre',
    value: 'CHF 14.50',
    incl: ['1 Orangensaft', 'Kleine Auswahl vom Brunch'],
  },
]

function Domenica() {
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
    <section id="domenica" className="domenica">
      <div className="domenica-bg-pattern"></div>

      <div className="container">
        {/* Title above */}
        <div className="domenica-header">
          <span className="section-label">Neu · Jeden 1. Sonntag im Monat</span>
          <h2 className="section-title">
            La <span className="gold-accent">Domenica</span> Italiana
          </h2>
          <p className="section-subtitle">Colazione &amp; Genuss</p>
        </div>

        <div className="domenica-content">
          {/* Poster – click to enlarge */}
          <figure className="domenica-image" onClick={() => setZoom(true)}>
            <img
              src="/ladomenica.jpeg"
              alt="La Domenica Italiana – Sonntagsbrunch der Osteria dei Poeti"
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
            />
            <span className="domenica-zoom-hint">
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
          <div className="domenica-text">
            <h3 className="domenica-subtitle">Ein italienisches Frühstück</h3>
            <p className="domenica-lead">
              Beginnen Sie den Sonntag mit <strong>La Domenica Italiana</strong> – einem
              italienischen Frühstück für einen genussvollen Sonntagmorgen, serviert in
              gemütlicher Atmosphäre.
            </p>

            <ul className="domenica-facts">
              {facts.map((f) => (
                <li key={f.title} className="domenica-fact">
                  <span className="domenica-fact-icon">{f.icon}</span>
                  <span className="domenica-fact-body">
                    <span className="domenica-fact-title">{f.title}</span>
                    <span className="domenica-fact-text">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Prices */}
        <div className="domenica-prices">
          {prices.map((p) => (
            <div key={p.name} className="domenica-price">
              <span className="domenica-price-name">{p.name}</span>
              <span className="domenica-price-note">{p.note}</span>
              <span className="domenica-price-value">{p.value}</span>
              <span className="domenica-price-label">inklusive</span>
              <ul className="domenica-price-incl">
                {p.incl.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="domenica-footer">
          <p className="domenica-reservation">
            Reservierung empfohlen – wir freuen uns auf Ihren Besuch!
          </p>
          <div className="domenica-actions">
            <a href="tel:+41447670501" className="btn btn-primary">
              Jetzt reservieren &middot; 044 767 05 01
            </a>
          </div>
        </div>
      </div>

      {/* Zoom / Lightbox */}
      {zoom && (
        <div className="domenica-lightbox" onClick={() => setZoom(false)}>
          <button className="domenica-lightbox-close" onClick={() => setZoom(false)} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            className="domenica-lightbox-img"
            src="/ladomenica.jpeg"
            alt="La Domenica Italiana – Sonntagsbrunch der Osteria dei Poeti"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Domenica
