import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Clients />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;