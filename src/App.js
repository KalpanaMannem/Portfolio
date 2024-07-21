import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import ProfileSection from './Components/ProfileSection';
import Resume from './Components/Resume';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProfileSection />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



