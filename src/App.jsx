import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About /> 
      
      {/* Spacer for next section */}
      <div className="h-screen bg-slate-900"></div> 
    </div>
  )
}

export default App;