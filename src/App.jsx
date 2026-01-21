import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
// import Events from './components/Events' // Temporär ausgeblendet - Events kommen später
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        {/* <Events /> */} {/* Temporär ausgeblendet - Events kommen später */}
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
