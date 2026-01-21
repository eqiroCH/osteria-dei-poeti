import './Impressum.css'

function Impressum({ setCurrentPage }) {
  return (
    <section id="impressum" className="impressum">
      <div className="container">
        <div className="legal-header">
          <button 
            className="back-button"
            onClick={() => {
              setCurrentPage('home')
              window.scrollTo(0, 0)
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Zurück zur Startseite
          </button>
          <h2 className="section-title">Impressum</h2>
        </div>
        
        <div className="legal-content">
          <div className="legal-section">
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              <strong>Osteria dei Poeti</strong><br />
              Kreuzrai 1<br />
              8933 Maschwanden<br />
              Schweiz
            </p>
          </div>

          <div className="legal-section">
            <h3>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+41447670501">044 767 05 01</a><br />
              E-Mail: <a href="mailto:Osteriadeipoeti391@gmail.com">Osteriadeipoeti391@gmail.com</a>
            </p>
          </div>

          <div className="legal-section">
            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
              Osteria dei Poeti<br />
              Kreuzrai 1<br />
              8933 Maschwanden<br />
              Schweiz
            </p>
          </div>

          <div className="legal-section">
            <h3>Haftungsausschluss</h3>
            
            <h4>Haftung für Inhalte</h4>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h4>Haftung für Links</h4>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h4>Urheberrecht</h4>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impressum

