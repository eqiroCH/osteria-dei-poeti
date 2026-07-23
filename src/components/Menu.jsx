import { useState, useEffect, useRef, useCallback } from 'react'
import './Menu.css'

// scale = leichtes Reinzoomen, ty = leichter Versatz nach oben (%),
// um die dünnen dunklen Restränder oben/an den Ecken sauber wegzuschneiden.
const pages = [
  { src: '/menu-cover.jpg', label: 'Willkommen', scale: 1.045, ty: -0.5 },
  { src: '/menu-1.jpg', label: 'Aperitivi · Getränke · Caffè', scale: 1.06, ty: -1.6 },
  { src: '/menu-2.jpg', label: 'Antipasti · Insalate', scale: 1.06, ty: -1.6 },
  { src: '/menu-3.jpg', label: 'Pasta · Nudeln', scale: 1.05, ty: -0.4 },
  { src: '/menu-4.jpg', label: 'Pizzeria', scale: 1.10, ty: -2.4 },
]

const pageStyle = (i) => ({
  transform: `translateY(${pages[i].ty || 0}%) scale(${pages[i].scale || 1})`,
})

function Menu() {
  const [page, setPage] = useState(0)
  const [flip, setFlip] = useState(null) // { dir: 'next' | 'prev', from, to }
  const [zoom, setZoom] = useState(false)
  const pageRef = useRef(0)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => { pageRef.current = page }, [page])

  // Turn to an explicit page index (pure updater – safe under StrictMode)
  const turn = useCallback((to) => {
    setFlip((current) => {
      if (current) return current // ignore while a page is turning
      const p = pageRef.current
      if (to < 0 || to >= pages.length || to === p) return current
      return { dir: to > p ? 'next' : 'prev', from: p, to }
    })
  }, [])

  const go = useCallback(
    (dir) => turn(pageRef.current + (dir === 'next' ? 1 : -1)),
    [turn]
  )

  const onFlipEnd = () => {
    setFlip((f) => {
      if (f) setPage(f.to)
      return null
    })
  }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (zoom) {
        if (e.key === 'Escape') setZoom(false)
        if (e.key === 'ArrowRight') go('next')
        if (e.key === 'ArrowLeft') go('prev')
        return
      }
      if (e.key === 'ArrowRight') go('next')
      if (e.key === 'ArrowLeft') go('prev')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, zoom])

  // Lock body scroll while zoom is open
  useEffect(() => {
    document.body.style.overflow = zoom ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [zoom])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 'next' : 'prev')
    }
  }

  // Which page the static base layer shows, and which one is on the moving leaf
  const baseIndex = flip ? (flip.dir === 'next' ? flip.to : flip.from) : page
  const leafIndex = flip ? (flip.dir === 'next' ? flip.from : flip.to) : page

  const isFirst = page === 0
  const isLast = page === pages.length - 1

  return (
    <section id="menu" className="menu">
      <div className="menu-bg-pattern"></div>

      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <span className="section-label">Kulinarische Genüsse</span>
          <h2 className="section-title">
            Unsere <span className="gold-accent">Speisekarte</span>
          </h2>
          <p className="section-subtitle">Blättern Sie durch unsere Karte wie in einem Buch</p>
        </div>

        {/* Flipbook */}
        <div
          className="book-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="book-arrow book-arrow-prev"
            onClick={() => go('prev')}
            disabled={isFirst || !!flip}
            aria-label="Vorherige Seite"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="book">
            <div className="book-spine"></div>

            {/* Static base page (revealed underneath the turning leaf) */}
            <div className="book-page">
              <img
                className="page-img"
                src={pages[baseIndex].src}
                alt={`Speisekarte – ${pages[baseIndex].label}`}
                style={pageStyle(baseIndex)}
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
            </div>

            {/* Turning leaf */}
            {flip && (
              <div className={`leaf leaf-${flip.dir}`} onAnimationEnd={onFlipEnd}>
                <div className="leaf-face leaf-front">
                  <img className="page-img" src={pages[leafIndex].src} alt="" style={pageStyle(leafIndex)} />
                </div>
                <div className="leaf-face leaf-back"></div>
                <div className="leaf-shadow"></div>
              </div>
            )}

            {/* Tap to enlarge */}
            <button
              className="book-zoom"
              onClick={() => setZoom(true)}
              aria-label="Seite vergrößern"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </button>
          </div>

          <button
            className="book-arrow book-arrow-next"
            onClick={() => go('next')}
            disabled={isLast || !!flip}
            aria-label="Nächste Seite"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Page indicator */}
        <div className="book-controls">
          <div className="book-dots">
            {pages.map((p, i) => (
              <button
                key={p.src}
                className={`book-dot ${i === page ? 'active' : ''}`}
                onClick={() => turn(i)}
                aria-label={`Seite ${i + 1}: ${p.label}`}
              />
            ))}
          </div>
          <p className="book-page-label">
            <span className="book-page-num">{page + 1} / {pages.length}</span>
            <span className="book-page-name">{pages[page].label}</span>
          </p>
        </div>

        <p className="menu-note-text">Alle Speisen und Getränke inklusive Mehrwertsteuer.</p>
      </div>

      {/* Zoom / Lightbox */}
      {zoom && (
        <div className="menu-lightbox" onClick={() => setZoom(false)}>
          <button className="menu-lightbox-close" onClick={() => setZoom(false)} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            className="menu-lightbox-nav menu-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); go('prev') }}
            disabled={isFirst}
            aria-label="Vorherige Seite"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="menu-lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <img
              className="menu-lightbox-img"
              src={pages[page].src}
              alt={`Speisekarte – ${pages[page].label}`}
              style={pageStyle(page)}
            />
          </div>

          <button
            className="menu-lightbox-nav menu-lightbox-next"
            onClick={(e) => { e.stopPropagation(); go('next') }}
            disabled={isLast}
            aria-label="Nächste Seite"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="menu-lightbox-counter">{page + 1} / {pages.length}</div>
        </div>
      )}
    </section>
  )
}

export default Menu
