import './App.css';
import Navabr from './components/Navabr';
import Header from './components/Header';
import Skin from './components/Skin';
import Para from './components/Para';
import Why from './pages/Why';
import Best from './pages/Best';
import Image from './pages/Image';
import Box from './pages/Box';
import Footer from './components/Footer';

import React, { useRef } from 'react';

function App() {
  const boxRef = useRef(null);

  const scrollToBox = () => {
    boxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navabr onAllProductsClick={scrollToBox} />
      <Header />
      <Skin />
      <Para />
      <Why />
      <Best />
      <Image />
      <div ref={boxRef}>
        <Box />
      </div>
      <Footer />
    </div>
  );
}

export default App;
