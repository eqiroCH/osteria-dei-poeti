import { useState } from 'react'
import './ValentineBanner.css'

function ValentineBanner({ isVisible, onClose }) {
  const [showPdfModal, setShowPdfModal] = useState(false)

  if (!isVisible) return null

  const openPdfModal = (e) => {
    e.preventDefault()
    setShowPdfModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closePdfModal = () => {
    setShowPdfModal(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <div className="valentine-banner">
        {/* Floating hearts coming from the heart */}
        <div className="floating-hearts">
          <span className="floating-heart" style={{ animationDelay: '0s', left: '20%', bottom: '15%' }}>♥</span>
          <span className="floating-heart" style={{ animationDelay: '0.4s', left: '35%', bottom: '10%' }}>♥</span>
          <span className="floating-heart" style={{ animationDelay: '0.8s', left: '50%', bottom: '12%' }}>♥</span>
          <span className="floating-heart" style={{ animationDelay: '1.2s', left: '65%', bottom: '18%' }}>♥</span>
          <span className="floating-heart" style={{ animationDelay: '1.6s', left: '45%', bottom: '8%' }}>♥</span>
          <span className="floating-heart" style={{ animationDelay: '2s', left: '30%', bottom: '5%' }}>♥</span>
        </div>
        
        <div className="valentine-content">
          <div className="valentine-text">
            <span className="valentine-label">14.2.26</span>
            <span className="valentine-title">Menù di San Valentino</span>
            <span className="valentine-subtitle">4-Gang Menü für Verliebte</span>
          </div>
          <button onClick={openPdfModal} className="valentine-cta">
            <span>Menü ansehen</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <button 
          className="valentine-close" 
          onClick={onClose}
          aria-label="Banner schließen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Menu Image Modal */}
      {showPdfModal && (
        <div className="pdf-modal-overlay" onClick={closePdfModal}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="pdf-modal-close" 
              onClick={closePdfModal}
              aria-label="Menü schließen"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img 
              src="/Bildschirmfoto%202026-01-21%20um%202.58.33%E2%80%AFAM.png"
              alt="Valentinstags-Menü"
              className="menu-image"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ValentineBanner

