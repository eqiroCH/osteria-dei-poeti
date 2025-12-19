import { useState, useEffect, useRef } from 'react'
import './Gallery.css'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80&auto=format&fit=crop',
    alt: 'Pizza aus dem Holzofen',
    category: 'Gerichte'
  },
  {
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&auto=format&fit=crop',
    alt: 'Pasta Gericht',
    category: 'Gerichte'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop',
    alt: 'Restaurant Terrasse',
    category: 'Ambiente'
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop',
    alt: 'Fleischgericht',
    category: 'Gerichte'
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80&auto=format&fit=crop',
    alt: 'Dessert',
    category: 'Desserts'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop',
    alt: 'Restaurant Ambiente',
    category: 'Ambiente'
  },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [centeredIndex, setCenteredIndex] = useState(0)
  const galleryRef = useRef(null)
  const itemRefs = useRef([])

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
      if (newIndex < 0) return galleryImages.length - 1
      if (newIndex >= galleryImages.length) return 0
      return newIndex
    })
  }

  // Intersection Observer for mobile carousel
  useEffect(() => {
    if (window.innerWidth > 500) return

    const observerOptions = {
      root: galleryRef.current,
      rootMargin: '0px',
      threshold: [0, 0.5, 1]
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const index = itemRefs.current.indexOf(entry.target)
          if (index !== -1) {
            setCenteredIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => {
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  // Scroll buttons functionality
  const scrollGallery = (direction) => {
    if (!galleryRef.current) return
    const scrollAmount = galleryRef.current.offsetWidth * 0.75
    galleryRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
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
        
        {/* Grid */}
        <div className="gallery-wrapper">
          <button className="gallery-scroll-btn gallery-scroll-left" onClick={() => scrollGallery(-1)} aria-label="Vorheriges Bild">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="gallery-grid" ref={galleryRef}>
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                ref={el => itemRefs.current[index] = el}
                className={`gallery-item item-${index + 1} ${centeredIndex === index ? 'centered' : ''}`}
                onClick={() => openLightbox(index)}
              >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/1a1a1a/d4a853?text=' + encodeURIComponent(image.alt)
                }}
              />
              <div className="item-overlay">
                <span className="item-category">{image.category}</span>
                <h3 className="item-title">{image.alt}</h3>
                <div className="item-zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
          </div>
          <button className="gallery-scroll-btn gallery-scroll-right" onClick={() => scrollGallery(1)} aria-label="Nächstes Bild">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
        
        {/* Social Media CTA */}
        <div className="gallery-cta">
          <p>Folgen Sie uns auf Social Media für mehr Eindrücke</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/osteriadeipoeti" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link instagram-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link facebook-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              <span>Facebook</span>
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
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt} 
            />
            <div className="lightbox-caption">
              <span className="caption-category">{galleryImages[selectedImage].category}</span>
              <h4>{galleryImages[selectedImage].alt}</h4>
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
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
