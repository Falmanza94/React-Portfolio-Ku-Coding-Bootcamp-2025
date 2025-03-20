import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <div id='main-content'>
        <AboutMe />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;