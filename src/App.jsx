import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      {/* Spacer for Contact section */}
      <div className="h-40 bg-slate-900"></div> 
    </div>
  )
}

export default App;