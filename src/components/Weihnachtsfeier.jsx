import { useState, useEffect } from 'react'
import './Weihnachtsfeier.css'

const facts = [
  {
    title: 'Anstossen in unserer Taverne Bar',
    text: 'Starten Sie Ihre Weihnachtsfeier bei einem feinen Apéro, köstlichen Drinks oder einem guten Glas Wein. Entspannt ankommen, lachen und geniessen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 3H3l4 7v11" />
        <path d="M16 3h5l-4 7v11" />
        <path d="M4 21h6M14 21h6" />
        <path d="M5 10h4M15 10h4" />
      </svg>
    ),
  },
  {
    title: 'Italien geniessen',
    text: 'Italienische Spezialitäten – als Menü oder als reichhaltiges Buffet. Frisch, authentisch und ganz nach Ihren Wünschen zubereitet.',
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
    title: 'Bis zu 60 Personen in zwei Sälen',
    text: 'Ob kleines Team oder grosse Firma – wir bieten Platz für bis zu 60 Personen in zwei liebevoll eingerichteten Sälen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Rundum sorglos',
    text: 'Auf Wunsch organisieren wir Apéro, Menü, Wein, Begleitung und Dekoration – Sie geniessen, wir kümmern uns um den Rest.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
]

function Weihnachtsfeier() {
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
    <section id="weihnachtsfeier" className="xmas">
      <div className="xmas-bg-pattern"></div>

      <div className="container">
        {/* Title above */}
        <div className="xmas-header">
          <span className="section-label">La Dolce Vita für Ihre</span>
          <h2 className="section-title">
            Firmen<span className="gold-accent">weihnachtsfeier</span>
          </h2>
          <p className="section-subtitle">Italienisch. Herzlich. Unvergesslich.</p>
        </div>

        <div className="xmas-content">
          {/* Poster – click to enlarge */}
          <figure className="xmas-image" onClick={() => setZoom(true)}>
            <img
              src="/Weihnachtsfeier.jpg"
              alt="Firmenweihnachtsfeier in der Osteria dei Poeti"
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
            />
            <span className="xmas-zoom-hint">
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
          <div className="xmas-text">
            <h3 className="xmas-subtitle">Feiern, geniessen, zusammen</h3>
            <p className="xmas-lead">
              Feiern Sie Ihre <strong>Firmenweihnachtsfeier</strong> in der Osteria dei Poeti –
              vom Apéro in der Taverne Bar bis zum festlichen Menü in unseren Sälen. Sagen Sie
              uns, was Sie sich wünschen, wir machen den Rest.
            </p>

            <ul className="xmas-facts">
              {facts.map((f) => (
                <li key={f.title} className="xmas-fact">
                  <span className="xmas-fact-icon">{f.icon}</span>
                  <span className="xmas-fact-body">
                    <span className="xmas-fact-title">{f.title}</span>
                    <span className="xmas-fact-text">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="xmas-reservation">
              Ankommen. Anstossen. Italien geniessen. Gemeinsam feiern.
            </p>

            <div className="xmas-actions">
              <a href="tel:+41447670501" className="btn btn-primary">
                Anfragen &middot; 044 767 05 01
              </a>
              <a href="mailto:osteriadeipoetitaverne@gmail.com" className="btn btn-secondary">
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom / Lightbox */}
      {zoom && (
        <div className="xmas-lightbox" onClick={() => setZoom(false)}>
          <button className="xmas-lightbox-close" onClick={() => setZoom(false)} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            className="xmas-lightbox-img"
            src="/Weihnachtsfeier.jpg"
            alt="Firmenweihnachtsfeier in der Osteria dei Poeti"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Weihnachtsfeier
