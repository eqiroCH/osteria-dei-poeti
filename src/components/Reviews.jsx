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
      </div>
    </section>
  )
}

export default Reviews
