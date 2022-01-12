import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Corousel from './components/corousel';
import Getstarted from './components/getstarted';
import MapContainer from './components/Location-picker'; 
import Autocomplete from './components/Autocomplete';
function App() {
  return (
    <>
          
          <Navbar />
          <Hero/>
          <About/>
          <div className='divider bg-stone-100 m-0 h-1 text-lg p-3'>Company</div>
          <Getstarted/>
          <Corousel/> 
          <Contact/> 
          <MapContainer/>
          <Footer />
    </>
  );
}

export default App;
