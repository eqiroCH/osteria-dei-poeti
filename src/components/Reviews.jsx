import { useEffect } from 'react'
import './Reviews.css'

function Reviews() {
  useEffect(() => {
    // Elfsight Script laden
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-bg"></div>
      
      <div className="container">
        <div className="elfsight-widget-container">
          <div className="elfsight-app-c6b7a741-9191-40bf-b7f5-7176f90d096c" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}

export default Reviews

