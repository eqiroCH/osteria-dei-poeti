import { useState, useEffect, useRef } from 'react'
import './Taverne.css'

const galleryImages = [
  { src: '/taverne-01.jpeg', alt: 'Taverne Bar – Aussenansicht bei Nacht' },
  { src: '/taverne-02.jpeg', alt: 'Gemütliche Abende in der Taverne Bar' },
  { src: '/taverne-03.jpeg', alt: 'En Ort für gueti Gschichte' },
  { src: '/taverne-04.jpeg', alt: 'Aperitif-Karte der Taverne Bar' },
  { src: '/taverne-05.jpeg', alt: 'Cocktail-Karte der Taverne Bar' },
  { src: '/taverne-06.jpeg', alt: 'Alkoholfreie Cocktails' },
  { src: '/taverne-07.jpeg', alt: 'Feine Digestifs & Shots' },
  { src: '/taverne-08.jpeg', alt: 'Ambiente in der Taverne Bar' },
  { src: '/taverne-09.jpeg', alt: 'Ambiente in der Taverne Bar' },
].map((img) => ({ ...img, url: encodeURI(img.src) }))

const barHours = [
  { day: 'Montag', time: 'Geschlossen', closed: true },
  { day: 'Dienstag', time: '19:00 – 23:00' },
  { day: 'Mittwoch', time: 'Geschlossen', closed: true },
  { day: 'Donnerstag', time: '19:00 – 23:00' },
  { day: 'Freitag', time: '19:00 – 23:00' },
  { day: 'Samstag', time: '19:00 – 23:00' },
  { day: 'Sonntag', time: 'Geschlossen', closed: true },
]

function Taverne() {
  const [lightbox, setLightbox] = useState(null)
  const touchStartX = useRef(0)

  const open = (i) => setLightbox(i)
  const close = () => setLightbox(null)
  const navigate = (dir) =>
    setLightbox((i) => (i === null ? i : (i + dir + galleryImages.length) % galleryImages.length))

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    const onKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1)
  }

  const renderHours = (rows) =>
    rows.map((r) => (
      <li key={r.day} className={`taverne-hours-row ${r.closed ? 'closed' : ''}`}>
        <span className="taverne-hours-day">{r.day}</span>
        <span className="taverne-hours-time">{r.time}</span>
      </li>
    ))

  return (
    <section id="taverne" className="taverne">
      <div className="taverne-bg-pattern"></div>

      <div className="container">
        {/* Header */}
        <div className="taverne-header">
          <span className="section-label">Bar &amp; Aperitivo</span>
          <h2 className="section-title">
            Taverne <span className="gold-accent">Bar</span>
          </h2>
          <p className="section-subtitle">Osteria dei Poeti</p>
        </div>

        <div className="taverne-top">
          {/* Intro text */}
          <div className="taverne-intro">
            <h3 className="taverne-greeting">Liebe Gäste</h3>
            <p>
              Unsere Taverne Bar ist der perfekte Ort, um den Feierabend in gemütlicher Atmosphäre
              zu genießen. Ob ein feiner Aperitif, ein erfrischender Cocktail, ein Glas Wein oder
              ein kühles Bier – bei uns könnt ihr den Abend entspannt ausklingen lassen.
            </p>
            <p className="taverne-signature">
              Wir freuen uns auf euren Besuch!<br />
              <span>Euer Team der Osteria dei Poeti – Taverne Bar</span>
            </p>
            <div className="taverne-actions">
              <a href="tel:+41447670501" className="btn btn-primary">
                Reservieren &middot; 044 767 05 01
              </a>
            </div>
          </div>

          {/* Opening hours */}
          <div className="taverne-hours">
            <div className="taverne-hours-card">
              <div className="taverne-hours-head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15.5 14" />
                </svg>
                <h4>
                  Öffnungszeiten
                  <span>Taverne Bar</span>
                </h4>
              </div>
              <ul className="taverne-hours-list">{renderHours(barHours)}</ul>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="taverne-gallery">
          {galleryImages.map((img, i) => (
            <figure key={img.src} className="taverne-tile" onClick={() => open(i)}>
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
              <span className="taverne-tile-zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="taverne-lightbox"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="taverne-lightbox-close" onClick={close} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button
            className="taverne-lightbox-nav taverne-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            aria-label="Vorheriges Bild"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <img
            className="taverne-lightbox-img"
            src={galleryImages[lightbox].url}
            alt={galleryImages[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="taverne-lightbox-nav taverne-lightbox-next"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            aria-label="Nächstes Bild"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="taverne-lightbox-counter">{lightbox + 1} / {galleryImages.length}</div>
        </div>
      )}
    </section>
  )
}

export default Taverne
