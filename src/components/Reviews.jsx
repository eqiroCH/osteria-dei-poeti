import './Reviews.css'

const reviews = [
  {
    id: 1,
    name: 'Maria S.',
    rating: 5,
    date: 'vor 2 Wochen',
    text: 'Italienische Küche mal anders! Tolle Speisekarte - auch vegetarisch. Das Ambiente ist wunderschön und das Personal sehr freundlich.',
    avatar: 'M'
  },
  {
    id: 2,
    name: 'Sandra M.',
    rating: 5,
    date: 'vor 3 Wochen',
    text: 'Ein kleines Stück Italien mitten in der Schweiz. Das Tiramisu ist das beste, das ich je gegessen habe. Sehr gemütliche Atmosphäre.',
    avatar: 'S'
  },
  {
    id: 3,
    name: 'Peter W.',
    rating: 4,
    date: 'vor 2 Monaten',
    text: 'Sehr gutes Essen und aufmerksamer Service. Die Terrasse im Sommer ist ein Traum. Preise sind angemessen für die Qualität.',
    avatar: 'P'
  },
  {
    id: 4,
    name: 'Laura B.',
    rating: 5,
    date: 'vor 1 Woche',
    text: 'Wir haben hier unseren Hochzeitstag gefeiert und es war perfekt! Das Team hat alles möglich gemacht. Grazie mille!',
    avatar: 'L'
  },
  {
    id: 5,
    name: 'Thomas K.',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Absolut fantastisch! Die Pasta war perfekt al dente und die Sauce unglaublich aromatisch. Sehr empfehlenswert!',
    avatar: 'T'
  },
  {
    id: 6,
    name: 'Michael R.',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Authentisch italienisch! Die hausgemachten Gnocchi sind ein Gedicht. Sehr empfehlenswert für alle Pasta-Liebhaber.',
    avatar: 'M'
  },
]

function Reviews() {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  // Dupliziere Reviews für nahtlose Animation
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-bg"></div>
      
      <div className="container">
        <div className="reviews-header">
          <span className="section-label">Kundenstimmen</span>
          <h2 className="section-title">Was unsere <span className="gold-accent">Gäste</span> sagen</h2>
          
          <div className="rating-summary">
            <div className="rating-score">4.6</div>
            <div className="rating-details">
              <div className="stars-large">★★★★★</div>
              <span>Basierend auf 42 Google Bewertungen</span>
            </div>
          </div>
        </div>
        
        <div className="reviews-carousel">
          <div className="reviews-track-infinite">
            {duplicatedReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">{review.avatar}</div>
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <div className="review-meta">
                      <span className="review-stars">{renderStars(review.rating)}</span>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <div className="google-icon">G</div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="reviews-cta">
          <a 
            href="https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1uyJC0usuVMuYMWmKqsv2-MwG3-4Nc5i87QIB5Pqa1DQ038TiKL7je2rrqu-ndGqhRpTrR8R8yEOpEkPyTt8HOJxnl8nZMlcJxKRBRXSdbN1GHj09_CBUBFbucnHr1klTzO0kM%3D&q=Restaurant+Osteria+dei+Poeti+Rezensionen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Alle Bewertungen lesen
          </a>
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJNeQNQwAHkEcRaVIaP4heDCo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Bewertung schreiben
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews

