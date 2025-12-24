import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      
      {/* Placeholder for future sections */}
      <div className="h-screen"></div> 
    </div>
  )
}

export default App;