import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brunch from './components/Brunch'
import Menu from './components/Menu'
import Taverne from './components/Taverne'
// import Events from './components/Events' // Temporär ausgeblendet - Events kommen später
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'impressum':
        return <Impressum setCurrentPage={setCurrentPage} />
      case 'datenschutz':
        return <Datenschutz setCurrentPage={setCurrentPage} />
      default:
        return (
          <>
            <Hero />
            <Brunch />
            <Menu />
            <Taverne />
            {/* <Events /> */} {/* Temporär ausgeblendet - Events kommen später */}
            <Gallery />
            <Reviews />
            <Contact />
          </>
        )
    }
  }

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App
