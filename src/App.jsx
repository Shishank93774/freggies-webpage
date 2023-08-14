import './App.css'
import Contact from './components/contact/Contact';
import Events from './components/Events/Events';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/navbar';
import Sliders from './components/sliders/Sliders';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sliders title={"BEST SELLERS"}></Sliders>
      <Sliders title={"BEST OFFERS"}></Sliders>
      <Sliders title={"KITCHEN MUST HAVE's"}></Sliders>
      <Events></Events>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
