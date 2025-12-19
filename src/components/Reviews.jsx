import { useEffect } from 'react'
import './Reviews.css'

function Reviews() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://static.elfsight.com/platform/platform.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }
    
    return () => {
      // Cleanup not needed as widget should persist
    }
  }, [])

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-bg">
        <div className="bg-gradient-left"></div>
        <div className="bg-gradient-right"></div>
      </div>
      
      <div className="container">
        {/* Header */}
        <div className="reviews-header">
          <span className="section-label">Kundenstimmen</span>
          <h2 className="section-title">
            Was unsere <span className="gold-accent">Gäste</span> sagen
          </h2>
          <p className="section-subtitle">Überzeugen Sie sich selbst von unserer Qualität</p>
        </div>
        
        {/* Elfsight Widget */}
        <div className="reviews-widget">
          <div 
            className="elfsight-app-c6b7a741-9191-40bf-b7f5-7176f90d096c" 
            data-elfsight-app-lazy
          ></div>
        </div>
        
        {/* CTA */}
        <div className="reviews-cta">
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJNeQNQwAHkEcRaVIaP4heDCo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Bewertung schreiben</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews
