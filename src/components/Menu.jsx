import { useState } from 'react'
import './Menu.css'

// Valentine's Menu Modal Component
function ValentineMenuModal({ isOpen, onClose }) {
  if (!isOpen) return null
  
  return (
    <div className="valentine-menu-modal-overlay" onClick={onClose}>
      <div className="valentine-menu-modal" onClick={(e) => e.stopPropagation()}>
        <button className="valentine-menu-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="valentine-menu-card">
          <h1 className="menu-restaurant">Osteria dei Poeti</h1>
          <h2 className="menu-title">MENÙ DI SAN VALENTINO</h2>
          
          <div className="menu-section">
            <h3>Antipasto</h3>
            <p className="dish-it">Tartare di vitello con pane tostato, tartufo fresco e olio tartufato</p>
            <p className="dish-de">Kalbstatar mit geröstetem Brot, frischem Trüffel und Trüffelöl</p>
          </div>

          <div className="menu-section">
            <h3>Primo Piatto</h3>
            <p className="dish-it">Tagliatelle dell'Osteria — strisce di vitello, porcini, tartufo fresco, olio tartufato e panna</p>
            <p className="dish-de">Hausgemachte Tagliatelle mit Kalbfleischstreifen, Steinpilzen, frischem Trüffel, Trüffelöl und Sahne</p>
          </div>

          <div className="menu-section">
            <h3>Secondo Piatto</h3>
            <p className="dish-it">Tagliata di Ribeye con rucola, pomodorini Pachino, parmigiano e aceto glassato, con verdure</p>
            <p className="dish-de">Ribeye-Steak in Scheiben geschnitten mit Rucola, Pachino-Kirschtomaten, Parmigiano Reggiano und Balsamico-Glasur, dazu Gemüse</p>
          </div>

          <div className="menu-section">
            <h3>Dessert</h3>
            <p className="dish-it">Tortino di cioccolato caldo con gelato alla prugna</p>
            <p className="dish-de">Warmes Schokoladenküchlein mit Pflaumeneis</p>
          </div>

          <div className="menu-section menu-finale">
            <p className="dish-it">Caffè e limoncello</p>
            <p className="dish-de">Kaffee und Limoncello</p>
          </div>

          <div className="menu-footer">
            <p>Per info e prenotazioni · <a href="tel:0447670501">044 767 05 01</a></p>
            <p>Kreuzrai 1 – 8933 Maschwanden</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const menuData = {
  antipasti: [
    { 
      name: 'Zuppa del giorno', 
      nameDE: 'Tagessuppe',
      description: '',
      price: '13.00'
    },
    { 
      name: 'Antipasto del Poeta', 
      nameDE: 'Vorspeise des Dichters',
      description: 'Auswahl italienischer Wurst- und Käsespezialitäten, serviert mit hausgemachten Konfitüren und Rosmarinbrot.',
      price: '24.00',
      special: true
    },
    { 
      name: 'Tartare di vitello', 
      nameDE: 'Kalbstatar',
      description: '120-150 gr. mit Steinpilzen und aromatisiertem Brot',
      price: '24.00'
    },
    { 
      name: 'Polpetta della nonna', 
      nameDE: 'Großmutters Fleischbällchen',
      description: 'Hausgemachte Fleischbällchen mit Tomatensauce und Knoblauchbrot',
      price: '24.50'
    },
    { 
      name: 'Bruschetta Classica', 
      nameDE: 'Klassische Bruschetta',
      description: 'Hausgeröstetes Bauernbrot mit Tomaten und Basilikum',
      price: '14.50',
      vegetarian: true
    },
    { 
      name: 'Bruschetta Parma e Burrata', 
      nameDE: 'Bruschetta mit Parma & Burrata',
      description: 'Parma Schinken mit Burrata-Mozzarella DOP',
      price: '16.50'
    },
    { 
      name: 'Melanzane alla Parmigiana', 
      nameDE: 'Auberginen Parmigiana',
      description: 'Im Ofen gebackene Auberginen mit San-Marzano-Tomatensauce, Fior di Latte und gereiftem Parmesankäse',
      price: 'Gr. 24.50 / Kl. 18.00',
      vegetarian: true
    },
  ],
  insalate: [
    { 
      name: 'Verde', 
      nameDE: 'Grüner Salat',
      description: '',
      price: '10.00',
      vegetarian: true
    },
    { 
      name: 'Mista', 
      nameDE: 'Gemischter Salat',
      description: '',
      price: '12.00',
      vegetarian: true
    },
    { 
      name: 'Rucola', 
      nameDE: 'Rucolasalat',
      description: 'Mit Cherry-Tomaten und Parmesan',
      price: '14.00',
      vegetarian: true
    },
    { 
      name: 'Caprese', 
      nameDE: 'Caprese Salat',
      description: 'Mit San Marzano Tomaten und Büffelmozzarella',
      price: '16.00',
      vegetarian: true
    },
  ],
  primi: [
    { 
      name: 'Spaghetti alla Carbonara', 
      nameDE: 'Spaghetti Carbonara',
      description: '',
      price: '24.00'
    },
    { 
      name: 'Lasagne al Forno', 
      nameDE: 'Lasagne aus dem Ofen',
      description: '',
      price: '26.00'
    },
    { 
      name: 'Tagliatelle al Ragù', 
      nameDE: 'Tagliatelle mit Ragout',
      description: 'Mit Rindsragout',
      price: '26.00'
    },
    { 
      name: 'Spaghetti al Gambero rosso', 
      nameDE: 'Spaghetti mit roten Garnelen',
      description: 'Frische Garnelen aus Mazara del Vallo, in der Pfanne mit Olivenöl und Zitronenschale sautiert',
      price: '32.00'
    },
    { 
      name: 'Ziti alla Genovese', 
      nameDE: 'Ziti Genovese',
      description: 'Mit Rind-, Kalb- und Schweinefleisch, 8 Stunden geschmort mit Zwiebeln und Weißwein',
      price: '29.50'
    },
    { 
      name: 'Ravioloni al Tartufo', 
      nameDE: 'Trüffelravioli',
      description: '',
      price: '28.50',
      special: true
    },
    { 
      name: 'Tagliatelle Osteria', 
      nameDE: 'Tagliatelle der Osteria',
      description: 'Mit Kalbfleischstreifen, Steinpilzen, Rahm und Trüffel',
      price: '29.50',
      special: true
    },
    { 
      name: 'Pappardelle al Ragù di Cinghiale', 
      nameDE: 'Pappardelle mit Wildschwein',
      description: 'Mit Wildschweinragout',
      price: '29.50'
    },
    { 
      name: 'Risotto ai Porcini', 
      nameDE: 'Steinpilz-Risotto',
      description: '',
      price: '28.00',
      vegetarian: true
    },
  ],
  secondi: [
    { 
      name: 'Ribeye alla griglia', 
      nameDE: 'Gegrilltes Ribeye',
      description: 'ca. 250gr',
      price: '49.00'
    },
    { 
      name: 'Costine di Agnello alla Romana', 
      nameDE: 'Römische Lammkoteletts',
      description: '',
      price: '46.50'
    },
    { 
      name: 'Ossobuco alla Milanese', 
      nameDE: 'Ossobuco Mailänder Art',
      description: 'Geschmorte Kalbshaxe mit Safranrisotto',
      price: '46.50'
    },
    { 
      name: 'Entrecôte al Pepe Verde', 
      nameDE: 'Entrecôte mit grünem Pfeffer',
      description: 'Mit Grüner-Pfeffer-Sauce',
      price: '48.50'
    },
    { 
      name: 'Mercato del Pesce', 
      nameDE: 'Fischmarkt',
      description: 'Tagesfrischer Fisch',
      price: 'Preis nach Angebot'
    },
  ],
  contorni: [
    { 
      name: 'Verdure grigliate', 
      nameDE: 'Gegrilltes Gemüse',
      description: '',
      price: '8.50',
      vegetarian: true
    },
    { 
      name: 'Patate al forno', 
      nameDE: 'Bratkartoffeln',
      description: '',
      price: '8.50',
      vegetarian: true
    },
    { 
      name: 'Risotto', 
      nameDE: 'Risotto',
      description: '',
      price: '9.00',
      vegetarian: true
    },
  ],
  pizzaClassiche: [
    { 
      name: 'Margherita', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Basilikum',
      price: '19.00',
      vegetarian: true
    },
    { 
      name: 'Marinara', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Knoblauch, Oregano, Basilikum',
      price: '18.00',
      vegetarian: true
    },
    { 
      name: 'Napoli', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Kapern, Oliven, Sardellen',
      price: '22.50'
    },
    { 
      name: 'Prosciutto', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Basilikum, Schinken',
      price: '23.50'
    },
    { 
      name: 'Calabrese', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, scharfe Salami, Basilikum, Taggiasca-Oliven, Zwiebeln',
      price: '24.00'
    },
    { 
      name: 'Capricciosa', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Basilikum, Pilze, Salami, Artischocken, Oliven',
      price: '26.50'
    },
    { 
      name: 'Vegetariana', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Basilikum, Gemüse',
      price: '26.50',
      vegetarian: true
    },
    { 
      name: 'Tonno', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Basilikum, Thunfisch, karamellisierte Zwiebeln',
      price: '26.50'
    },
    { 
      name: 'Quattro Formaggi e Noci', 
      nameDE: 'Vier Käse mit Nüssen',
      description: 'Mozzarella, Taleggio, Gorgonzola, Parmesan, Walnüsse',
      price: '27.00',
      vegetarian: true
    },
  ],
  pizzaSpeciali: [
    { 
      name: 'Osteria', 
      nameDE: '',
      description: 'Pomodoro S. Marzano DOP, Mozzarella, Basilikum, Rucola, Parma, Parmesan, Cherry-Tomaten',
      price: '28.50',
      special: true
    },
    { 
      name: 'Burratina', 
      nameDE: '',
      description: 'Pomodoro S. Marzano, Burrata DOP, Parma',
      price: '27.50',
      special: true
    },
    { 
      name: 'Maialona', 
      nameDE: '',
      description: 'Mozzarella, Steinpilze, Speck, Gorgonzola, Zwiebeln',
      price: '28.50',
      special: true
    },
    { 
      name: 'Mortazza', 
      nameDE: '',
      description: 'Mozzarella, Basilikum, Burrata, Pistazien, Mortadella',
      price: '28.50',
      special: true
    },
    { 
      name: 'Salsiccia e Friarielli', 
      nameDE: '',
      description: 'Mozzarella, Salsiccia, Friarielli, Parmesan-Creme',
      price: '29.50',
      special: true
    },
  ],
}

const categories = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'insalate', label: 'Insalate' },
  { id: 'primi', label: 'Primi Piatti' },
  { id: 'secondi', label: 'Secondi Piatti' },
  { id: 'contorni', label: 'Contorni' },
  { id: 'pizzaClassiche', label: 'Pizza Classiche' },
  { id: 'pizzaSpeciali', label: 'Pizza Speciali' },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('antipasti')
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [showValentineMenu, setShowValentineMenu] = useState(false)

  const toggleItem = (itemName) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName)
    } else {
      newExpanded.add(itemName)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <section id="menu" className="menu">
      <div className="menu-bg-pattern"></div>
      
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <span className="section-label">Kulinarische Genüsse</span>
          <h2 className="section-title">
            Unsere <span className="gold-accent">Speisekarte</span>
          </h2>
          <p className="section-subtitle">Entdecken Sie die Vielfalt der italienischen Küche</p>
        </div>

        {/* Valentine's Day Special Button */}
        <button 
          className="valentine-special-btn"
          onClick={() => setShowValentineMenu(true)}
        >
          <span className="valentine-heart">♥</span>
          <span className="valentine-btn-text">
            <span className="valentine-btn-title">Menù di San Valentino</span>
            <span className="valentine-btn-subtitle">14. Februar · 4-Gang Menü</span>
          </span>
          <svg className="valentine-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        
        {/* Category Tabs */}
        <div className="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-label">{cat.label}</span>
              <span className="tab-underline"></span>
            </button>
          ))}
        </div>

        {/* Valentine Menu Modal */}
        <ValentineMenuModal 
          isOpen={showValentineMenu} 
          onClose={() => setShowValentineMenu(false)} 
        />
        
        {/* Menu Items */}
        <div className="menu-items-grid">
          {menuData[activeCategory].map((item, index) => {
            const isExpanded = expandedItems.has(item.name)
            const hasDescription = item.description && item.description.length > 0
            
            return (
              <article 
                key={item.name} 
                className={`menu-card ${item.special ? 'featured' : ''} ${isExpanded ? 'expanded' : ''} ${hasDescription ? 'has-details' : ''}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="card-content">
                  {/* Top Row: Name + Price */}
                  <div className="card-top">
                    <div className="item-names">
                      <h3 className="item-name">{item.name}</h3>
                      {item.nameDE && <p className="item-name-german">{item.nameDE}</p>}
                    </div>
                    <div className="item-price">{item.price} CHF</div>
                  </div>
                  
                  {/* Bottom Row: Expand Button + Badges */}
                  <div className="card-bottom">
                    {hasDescription ? (
                      <button 
                        className="expand-button" 
                        onClick={() => toggleItem(item.name)}
                      >
                        <svg className={isExpanded ? 'rotated' : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                        <span>{isExpanded ? 'Weniger' : 'Mehr'}</span>
                      </button>
                    ) : (
                      <div className="expand-placeholder"></div>
                    )}
                    
                    <div className="item-badges">
                      {item.special && (
                        <span className="badge badge-special">Empfehlung</span>
                      )}
                      {item.vegetarian && (
                        <span className="badge badge-veg">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.7c.36-.05.73-.07 1.09-.07C13 19.23 19 14 20.5 8c0 0-3 0-3.5 0z"/>
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Expandable Description */}
                  {hasDescription && isExpanded && (
                    <div className="item-description-wrapper">
                      <p className="item-description">{item.description}</p>
                    </div>
                  )}
                </div>
                <div className="card-accent"></div>
              </article>
            )
          })}
        </div>
        
        {/* Note for Secondi */}
        {activeCategory === 'secondi' && (
          <div className="menu-note-box">
            <p className="menu-note-text">
              *Patate al forno e verdure sono incluse nei secondi piatti—Bratkartoffeln und Gemüse sind in den Hauptgerichten inbegriffen.
            </p>
          </div>
        )}
        
      </div>
    </section>
  )
}

export default Menu
