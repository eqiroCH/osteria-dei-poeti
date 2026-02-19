import './PizzaPromo.css'

function PizzaPromo({ isVisible, onClose }) {
  if (!isVisible) return null

  return (
    <div className="pizza-promo">
      <div className="pizza-promo-shell">
        {/* Hanging price tag */}
        <div className="pizza-promo-price-tag">
          <div className="price-tag-string"></div>
          <div className="price-tag-body">
            <span className="price-amount">25</span>
            <span className="price-currency">CHF</span>
          </div>
        </div>
        
        <img 
          src="/pizza-slice.png" 
          alt="" 
          className="pizza-promo-bg" 
          aria-hidden="true"
        />
        
        <div className="pizza-promo-content">
          {/* Curved "All you can eat" text along the crust */}
          <svg className="pizza-promo-curved-text" viewBox="0 0 300 80" aria-hidden="true">
            <defs>
              <path id="curve" d="M 20,70 Q 150,20 280,70" fill="transparent" />
            </defs>
            <text>
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                All you can eat
              </textPath>
            </text>
          </svg>
          
          {/* Curved "Donnerstags" on the crust */}
          <svg className="pizza-promo-curved-day" viewBox="0 0 240 65" aria-hidden="true">
            <defs>
              <path id="dayCurve" d="M 5,60 Q 120,5 235,60" fill="transparent" />
            </defs>
            <text className="day-label">
              <textPath href="#dayCurve" startOffset="50%" textAnchor="middle">
                Donnerstags
              </textPath>
            </text>
          </svg>
        </div>
        
        <button 
          className="pizza-promo-close" 
          onClick={onClose}
          aria-label="Banner schließen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      
      {/* Button UNDER the pizza */}
      <a href="#menu" className="pizza-promo-cta" onClick={() => onClose()}>
        <span>Speisekarte</span>
        <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  )
}

export default PizzaPromo
