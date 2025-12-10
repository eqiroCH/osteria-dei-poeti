import './Gallery.css'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
    alt: 'Pizza aus dem Holzofen',
    category: 'Gerichte'
  },
  {
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
    alt: 'Pasta Gericht',
    category: 'Gerichte'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    alt: 'Restaurant Terrasse',
    category: 'Ambiente'
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    alt: 'Fleischgericht',
    category: 'Gerichte'
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
    alt: 'Dessert',
    category: 'Desserts'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    alt: 'Restaurant Ambiente',
    category: 'Ambiente'
  },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Impressionen</span>
          <h2 className="section-title">Unsere <span className="gold-accent">Galerie</span></h2>
          <p className="section-subtitle">Einblicke in unsere Küche und unser Ambiente</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item item-${index + 1}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
                <h3 className="gallery-title">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta">
          <p>Folgen Sie uns auf Instagram für mehr Eindrücke</p>
          <a href="https://www.instagram.com/osteriadeipoeti" target="_blank" rel="noopener noreferrer" className="instagram-link">
            @osteriadeipoeti
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery

