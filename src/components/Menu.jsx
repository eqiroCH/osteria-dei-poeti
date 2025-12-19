import { useState } from 'react'
import './Menu.css'

const menuData = {
  antipasti: [
    { name: 'Bruschetta', description: 'Geröstetes Brot mit frischen Tomaten, Knoblauch und Basilikum' },
    { name: 'Carpaccio', description: 'Hauchdünnes Rindfleisch mit Rucola und Parmesan' },
    { name: 'Caprese', description: 'Mozzarella mit Tomaten und Basilikum', vegetarian: true },
    { name: 'Antipasto Misto', description: 'Gemischte italienische Vorspeisen', special: true },
  ],
  pasta: [
    { name: 'Tagliatelle', description: 'Frische Bandnudeln mit verschiedenen Saucen', special: true },
    { name: 'Spaghetti', description: 'Klassische Spaghetti nach Wahl' },
    { name: 'Penne', description: 'Penne mit hausgemachter Sauce' },
    { name: 'Risotto', description: 'Cremiges Risotto nach Tagesangebot' },
    { name: 'Gnocchi', description: 'Hausgemachte Gnocchi', vegetarian: true },
  ],
  pizza: [
    { name: 'Margherita', description: 'Tomaten, Mozzarella, Basilikum', vegetarian: true, special: true },
    { name: 'Prosciutto', description: 'Tomaten, Mozzarella, Schinken' },
    { name: 'Funghi', description: 'Tomaten, Mozzarella, Champignons', vegetarian: true },
    { name: 'Quattro Stagioni', description: 'Tomaten, Mozzarella, Artischocken, Pilze, Schinken, Oliven' },
    { name: 'Diavola', description: 'Tomaten, Mozzarella, scharfe Salami' },
  ],
  dolci: [
    { name: 'Tiramisu', description: 'Hausgemachtes Tiramisu nach Originalrezept', special: true },
    { name: 'Panna Cotta', description: 'Vanille-Panna Cotta mit Beerensauce' },
    { name: 'Gelato', description: 'Hausgemachtes italienisches Eis' },
    { name: 'Affogato', description: 'Vanilleeis mit heißem Espresso' },
  ],
}

const categories = [
  { id: 'antipasti', label: 'Antipasti', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  { id: 'pasta', label: 'Pasta', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  { id: 'pizza', label: 'Pizza', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  { id: 'dolci', label: 'Dolci', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('antipasti')

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
        
        {/* Menu Items */}
        <div className="menu-items-grid">
          {menuData[activeCategory].map((item, index) => (
            <article 
              key={item.name} 
              className={`menu-card ${item.special ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="card-content">
                <div className="card-header">
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-badges">
                    {item.special && (
                      <span className="badge badge-special">Empfehlung</span>
                    )}
                    {item.vegetarian && (
                      <span className="badge badge-veg">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.7c.36-.05.73-.07 1.09-.07C13 19.23 19 14 20.5 8c0 0-3 0-3.5 0z"/>
                        </svg>
                        Vegetarisch
                      </span>
                    )}
                  </div>
                </div>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="card-accent"></div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Menu
