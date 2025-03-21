import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Navigation from './components/Navigation/index.jsx';
import Footer from './components/Footer/index.jsx';
import AboutMe from './pages/AboutMe/index.jsx';
import Portfolio from './pages/Portfolio/index.jsx';
import Resume from './pages/Resume/index.jsx';
import Contact from './pages/Contact/index.jsx';
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <div id='main-content'>
        <AboutMe />
        <Routes>
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;