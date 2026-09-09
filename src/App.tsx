import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
