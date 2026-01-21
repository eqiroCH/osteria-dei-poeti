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

  return (
    <>
      <ValentineBanner isVisible={bannerVisible} onClose={() => setBannerVisible(false)} />
      <Navbar withBanner={bannerVisible} />
      <main>
        <Hero />
        <Menu />
        {/* <Events /> */} {/* Temporär ausgeblendet - Events kommen später */}
        <Gallery />
        <Reviews />
        <Contact />
        <Impressum />
        <Datenschutz />
      </main>
      <Footer />
    </>
  )
}

export default App
