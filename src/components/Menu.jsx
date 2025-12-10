import { useState } from 'react'
import './Menu.css'

const menuData = {
  antipasti: [
    { name: 'Bruschetta', description: 'Geröstetes Brot mit frischen Tomaten, Knoblauch und Basilikum' },
    { name: 'Carpaccio', description: 'Hauchdünnes Rindfleisch mit Rucola und Parmesan' },
    { name: 'Caprese', description: 'Mozzarella mit Tomaten und Basilikum' },
    { name: 'Antipasto Misto', description: 'Gemischte italienische Vorspeisen' },
  ],
  pasta: [
    { name: 'Tagliatelle', description: 'Frische Bandnudeln mit verschiedenen Saucen', special: true },
    { name: 'Spaghetti', description: 'Klassische Spaghetti nach Wahl' },
    { name: 'Penne', description: 'Penne mit hausgemachter Sauce' },
    { name: 'Risotto', description: 'Cremiges Risotto nach Tagesangebot' },
    { name: 'Gnocchi', description: 'Hausgemachte Gnocchi', vegetarian: true },
  ],
  pizza: [
    { name: 'Margherita', description: 'Tomaten, Mozzarella, Basilikum', special: true },
    { name: 'Prosciutto', description: 'Tomaten, Mozzarella, Schinken' },
    { name: 'Funghi', description: 'Tomaten, Mozzarella, Champignons', vegetarian: true },
    { name: 'Quattro Stagioni', description: 'Tomaten, Mozzarella, Artischocken, Pilze, Schinken, Oliven' },
    { name: 'Diavola', description: 'Tomaten, Mozzarella, scharfe Salami' },
  ],
  dolci: [
    { name: 'Tiramisù', description: 'Hausgemachtes Tiramisù nach Originalrezept' },
    { name: 'Panna Cotta', description: 'Vanille-Panna Cotta mit Beerensauce' },
    { name: 'Gelato', description: 'Hausgemachtes italienisches Eis' },
    { name: 'Affogato', description: 'Vanilleeis mit heißem Espresso' },
  ],
}

const categories = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'pasta', label: 'Pasta & Risotto' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'dolci', label: 'Dolci' },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('antipasti')

  return (
    <section id="menu" className="menu">
      <div className="menu-bg-pattern"></div>
      
      <div className="container">
        <div className="menu-header">
          <span className="section-label">Kulinarische Genüsse</span>
          <h2 className="section-title">Unsere <span className="gold-accent">Speisekarte</span></h2>
          <p className="section-subtitle">Entdecken Sie die Vielfalt der italienischen Küche</p>
        </div>
        
        <div className="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-label">{cat.label}</span>
            </button>
          ))}
        </div>
        
        <div className="menu-items">
          {menuData[activeCategory].map((item, index) => (
            <div 
              key={item.name} 
              className={`menu-item ${item.special ? 'special' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="item-header">
                <h3 className="item-name">
                  {item.name}
                  {item.special && <span className="badge special-badge">Empfehlung</span>}
                  {item.vegetarian && <span className="badge veg-badge">Vegetarisch</span>}
                </h3>
              </div>
              <p className="item-description">{item.description}</p>
              <div className="item-line"></div>
            </div>
          ))}
        </div>
        
        <div className="menu-footer">
          <p className="menu-note">
            Fragen Sie nach unseren Tagesempfehlungen und der vollständigen Speisekarte
          </p>
          <a href="tel:+41447670501" className="btn btn-primary">
            Jetzt anrufen: 044 767 05 01
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu

