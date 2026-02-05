import { useState } from 'react'
import './App.css'
import ValentineBanner from './components/ValentineBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
// import Events from './components/Events' // Temporär ausgeblendet - Events kommen später
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import Footer from './components/Footer'

function App() {
  const [bannerVisible, setBannerVisible] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')
  const showValentineBanner = bannerVisible && currentPage === 'home'

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
            <Menu />
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
      <ValentineBanner isVisible={showValentineBanner} onClose={() => setBannerVisible(false)} />
      <Navbar withBanner={showValentineBanner} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App
