import './PizzaBanner.css'

function PizzaBanner() {
  return (
    <aside className="pizza-banner" role="region" aria-label="Aktion: All you can eat Pizza">
      <div className="pizza-banner-inner">
        <div className="pizza-banner-left">
          <div className="pizza-banner-kicker">
            <span className="pizza-banner-tag">Giovedì Speciale</span>
            <span className="pizza-banner-kicker-text">Jeden Donnerstag</span>
          </div>
          <div className="pizza-banner-title">
            <span className="pizza-banner-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C7.5 3 4 4.8 2.6 6.1a1 1 0 0 0-.2 1.2l8.7 15.1a1 1 0 0 0 1.7 0l8.7-15.1a1 1 0 0 0-.2-1.2C20 4.8 16.5 3 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path d="M6.8 9.2c3.2-1.9 7.2-1.9 10.4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                <path d="M9.2 12.7h.01M12 14.2h.01M14.8 12.7h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
              </svg>
            </span>
            All you can eat Pizza
          </div>
          <div className="pizza-banner-sub">
            <span className="pizza-banner-price-inline">25 CHF</span>
            <span className="pizza-banner-muted">pro Person</span>
          </div>
        </div>

        <div className="pizza-banner-right">
          <div className="pizza-banner-badge" aria-hidden="true">
            <span className="pizza-banner-badge-top">25</span>
            <span className="pizza-banner-badge-bottom">CHF</span>
          </div>

          <div className="pizza-banner-actions">
            <a className="pizza-banner-btn primary" href="tel:+41447670501">
              Reservieren
            </a>
            <a className="pizza-banner-btn secondary" href="#menu">
              Speisekarte
            </a>
          </div>
        </div>
      </div>

      <div className="pizza-banner-glow" aria-hidden="true" />
    </aside>
  )
}

export default PizzaBanner

