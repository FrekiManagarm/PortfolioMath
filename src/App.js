import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Costs from './components/Costs';

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Costs />
      <Contact />
    </div>
  );
}

export default App;