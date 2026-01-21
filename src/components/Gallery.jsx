import { useState } from 'react'
import './Gallery.css'

// Alle Bilder für die Lightbox
const allImages = [
  { src: '/gallery-01.jpeg', alt: 'Polpo con Patate', category: 'Gerichte' },
  { src: '/gallery-02.jpeg', alt: 'Tagliata di Manzo', category: 'Gerichte' },
  { src: '/gallery-03.jpeg', alt: 'Lasagne della Casa', category: 'Gerichte' },
  { src: '/gallery-04.jpeg', alt: 'Polpette al Sugo', category: 'Gerichte' },
  { src: '/gallery-05.jpeg', alt: 'Pasta Kreationen', category: 'Gerichte' },
  { src: '/gallery-06.jpeg', alt: 'Hausgemachte Pasta', category: 'Gerichte' },
  { src: '/gallery-07.jpeg', alt: 'Frische Zutaten', category: 'Gerichte' },
  { src: '/gallery-08.jpeg', alt: 'Pizza aus dem Ofen', category: 'Pizza' },
  { src: '/gallery-09.jpeg', alt: 'Fleischgerichte', category: 'Gerichte' },
  { src: '/gallery-10.jpeg', alt: 'Antipasti', category: 'Gerichte' },
  { src: '/gallery-11.jpeg', alt: 'Dessert', category: 'Desserts' },
  { src: '/gallery-12.jpeg', alt: 'Vorspeisen', category: 'Gerichte' },
  { src: '/gallery-13.jpeg', alt: 'Dolci', category: 'Desserts' },
  { src: '/gallery-14.jpeg', alt: 'Restaurant Terrasse', category: 'Ambiente' },
  { src: '/gallery-15.jpeg', alt: 'Gemütliche Atmosphäre', category: 'Ambiente' },
]

// Nur die ersten 4 Bilder für die Vorschau (das 5. ist der "Mehr" Button)
const previewImages = allImages.slice(0, 4)

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ''
  }

  const navigateImage = (direction) => {
    setSelectedImage(prev => {
      const newIndex = prev + direction
      if (newIndex < 0) return allImages.length - 1
      if (newIndex >= allImages.length) return 0
      return newIndex
    })
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        {/* Header */}
        <div className="gallery-header">
          <span className="section-label">Impressionen</span>
          <h2 className="section-title">
            Unsere <span className="gold-accent">Galerie</span>
          </h2>
          <p className="section-subtitle">Einblicke in unsere Küche und unser Ambiente</p>
        </div>
        
        {/* Grid - nur 4 Bilder + "Mehr" Button */}
        <div className="gallery-grid">
          {/* Erstes großes Bild */}
          <div 
            className="gallery-item item-large"
            onClick={() => openLightbox(0)}
          >
            <img src={previewImages[0].src} alt={previewImages[0].alt} />
            <div className="item-overlay">
              <span className="item-category">{previewImages[0].category}</span>
              <h3 className="item-title">{previewImages[0].alt}</h3>
            </div>
          </div>

          {/* Rechte Spalte mit 4 kleineren Bildern */}
          <div className="gallery-right">
            {/* Obere Reihe - 2 Bilder */}
            <div 
              className="gallery-item"
              onClick={() => openLightbox(1)}
            >
              <img src={previewImages[1].src} alt={previewImages[1].alt} />
              <div className="item-overlay">
                <span className="item-category">{previewImages[1].category}</span>
                <h3 className="item-title">{previewImages[1].alt}</h3>
              </div>
            </div>
            <div 
              className="gallery-item"
              onClick={() => openLightbox(2)}
            >
              <img src={previewImages[2].src} alt={previewImages[2].alt} />
              <div className="item-overlay">
                <span className="item-category">{previewImages[2].category}</span>
                <h3 className="item-title">{previewImages[2].alt}</h3>
              </div>
            </div>

            {/* Untere Reihe - 1 Bild + "Mehr anzeigen" */}
            <div 
              className="gallery-item"
              onClick={() => openLightbox(3)}
            >
              <img src={previewImages[3].src} alt={previewImages[3].alt} />
              <div className="item-overlay">
                <span className="item-category">{previewImages[3].category}</span>
                <h3 className="item-title">{previewImages[3].alt}</h3>
              </div>
            </div>
            
            {/* "Mehr anzeigen" Button */}
            <div 
              className="gallery-item gallery-more"
              onClick={() => openLightbox(4)}
            >
              <img src={allImages[4].src} alt="Mehr Bilder" />
              <div className="more-overlay">
                <div className="more-content">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  <span className="more-count">+{allImages.length - 4}</span>
                  <span className="more-text">Alle Bilder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media CTA */}
        <div className="gallery-cta">
          <p>Folgen Sie uns auf Social Media für mehr Eindrücke</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/osteriadeipoeti2025" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link-simple"
              aria-label="Instagram"
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
              className="social-link-simple"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://share.google/qVNRg1aRsZNvqYzcM" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link-simple"
              aria-label="Google"
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
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={allImages[selectedImage].src} 
              alt={allImages[selectedImage].alt} 
            />
            <div className="lightbox-caption">
              <span className="caption-category">{allImages[selectedImage].category}</span>
              <h4>{allImages[selectedImage].alt}</h4>
            </div>
          </div>
          
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          
          <div className="lightbox-counter">
            {selectedImage + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
